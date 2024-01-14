const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const UserController = require('./src/v.0.1.1-beta/controllers/users.controller');
const {UserRoutes, AuthRoutes, ReminderRoutes, PillowRoutes} = require('./src/v.0.1.1-beta/routes/index');
const dbconn = require('./src/v.0.1.1-beta/database.config');
dotenv.config();
const app = express();
const jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(async (req, res, next) => {
    const UserCon = new UserController();
    const users = await UserCon.readAll();
    if (req.headers.authorization) {
      jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.JWT_SECRET_KEY,
        (err, payload) => {
          if (err) next();
          else if (payload) {
            const foundUser = users.find((user) => user.id === payload.id);
            if (foundUser) {
              req.user = foundUser;
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
  });
app.use('/api/v1/user', UserRoutes);
app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/pillows', PillowRoutes);
app.use('/api/v1/reminders', ReminderRoutes);

const start = async () => {
    try{
        app.get('/', async (req, res) => {
          res.status(200).send({"status": "Success"}); 
      });
        app.listen(process.env.PORT, () => {
            console.log("Server start - http://localhost:" + process.env.PORT);
            dbconn();
        });
    }
    catch(e){
        console.log(e);
    }
}

start();