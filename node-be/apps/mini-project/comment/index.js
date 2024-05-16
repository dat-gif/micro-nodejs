import express from "express";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(bodyParser.json());
app.use(cors());

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

  axios.post("http://localhost:5000/events", {
    type: "CommentCreated",
    data: { id, content, postId: req.params.id, status: "pending" },
  });
  res.status(201).send(commentByPost);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type == "CommentModerated") {
    const { postId, id, status } = data;
    const comments = postCommentIds[postId];
    const comment = comments.find((comment) => {
      return comment.id === id;
    });

    comment.status = status;

    axios.post("http://localhost:5000/events", {
      type: "CommentUpdated",
      data: { id, status, postId, content },
    });
  }
  res.send({});
});

app.listen(4001, () => {
  console.log("--comment on: 4001--");
});
