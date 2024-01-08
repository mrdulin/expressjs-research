import express from "express";

const userRouter = express.Router();

userRouter.post('/login', (req, res) => {
  res.sendStatus(200)
});

export default userRouter;