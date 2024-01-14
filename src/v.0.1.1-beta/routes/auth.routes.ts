import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import UserController from "../controllers/users.controller";
const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  const UserCon = new UserController();
  const user = await UserCon.readBy({
    login: req.body.login,
    password: req.body.password,
  });
  if (user) {
    const accessToken = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET_KEY as string
    );
    await UserCon.updateUser({ id: user.id }, { token: accessToken });
    return res.status(200).json({
      id: user.id,
      login: user.login,
      token: accessToken,
    });
  }

  return res.status(404).json({ message: "User not found" });
});

export default router;

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const UserCon = new UserController();
  const users = await UserCon.readAll();
  if (req.headers.authorization) {
    jwt.verify(
      req.headers.authorization.split(" ")[1] as string,
      process.env.JWT_SECRET_KEY as string,
      (err: jwt.JsonWebTokenError | null, payload: any) => {
        if (err) next();
        else if (payload) {
          const foundUser = users.find((user: any) => user.id === payload.id);
          if (foundUser) {
            (req as any).user = foundUser;
            next();
          } else {
            next();
          }
        }
      }
    );
  } else {
    next();
  }
}
