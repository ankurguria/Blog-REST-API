import express from "express";
import moongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import categoryRouter from "./routes/categories.js";

dotenv.config();

const app = express();

moongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoryRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`Server is listening at: http://localhost:${PORT}`)
);
