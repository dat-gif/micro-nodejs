import express from "express";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";
import { log } from "console";
const app = express();
app.use(bodyParser.json());

const postCommentIds = {};

app.get("/posts/:id/comment", (req, res) => {
  res.send(postCommentIds[req.params.id] || []);
});

app.post("/posts/:id/comment", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { content } = req.body;

  const commentByPost = postCommentIds[req.params.id] || [];
  commentByPost.push({ id, content });
  postCommentIds[req.params.id] = commentByPost;
  res.status(201).send(commentByPost);
});
app.listen(4001, () => {
  console.log("--on 4001--");
});
