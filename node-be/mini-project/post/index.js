import express from "express";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());

const post = {};

app.get("/posts", (req, res) => {
  res.send(post);
});
app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  post[id] = { id, title };
  res.send("add post: " + id);
});
app.listen(4000, () => {
  console.log("/post on: 4000");
});
