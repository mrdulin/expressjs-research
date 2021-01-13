import express, { Request, Response, Router } from 'express';
import session from 'express-session';

const app = express();
const routes = Router();

interface userInformation {
  username: string;
  email: string;
}

// Comment out in order not to affect other examples
// declare module 'express-session' {
//   interface SessionData {
//     user: userInformation;
//   }
// }
class AppAPIController {
  public getUserByAuth(req: Request, res: Response) {
    // return res.json(req.session.user);
  }
}

const controller = new AppAPIController();

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
);
routes.get('/@me', controller.getUserByAuth);
