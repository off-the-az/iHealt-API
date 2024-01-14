import express, {NextFunction, Request, Response} from 'express';
import * as bodyParser from 'body-parser';

import UserRoutes from './src/v.0.1.1-beta/routes/users.routes';
import AuthRoutes, {authMiddleware} from './src/v.0.1.1-beta/routes/auth.routes';
import PillowRoutes from './src/v.0.1.1-beta/routes/pillows.routes';
import ReminderRoutes from './src/v.0.1.1-beta/routes/reminders.routes';
import dbconn from './src/v.0.1.1-beta/database.config';

import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(authMiddleware);
app.use('/api/v1/user', UserRoutes);
app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/pillows', PillowRoutes);
app.use('/api/v1/reminders', ReminderRoutes);

const start = async () => {
    try{
        app.get('/', async (req : Request, res : Response) => {
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