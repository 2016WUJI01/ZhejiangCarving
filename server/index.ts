import express from "express";
import test from "./api/test";
import user from "./api/user";

const app = express();

app.use(express.json());
app.use("/test", test);
app.use("/user", user);

app.get("/", (req, res) => {
  res.json("this is server");
});

export default app;
