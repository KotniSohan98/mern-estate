import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./models/routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!!!");
});

//API route
// app.get("/", (req, res) => {
//   // res.send("Hello world!");
//   res.json({ message: "Hello world!" });
// });

app.use("/api/user", userRouter);
