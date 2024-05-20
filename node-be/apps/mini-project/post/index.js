import express from "express";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const post = {};

app.get("/posts", (req, res) => {
  res.send(post);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  post[id] = { id, title };

  axios.post("http://localhost:5000/events", {
    type: "PostCreated",
    data: { id, title },
  });

  res.send("add post: " + id);
});

app.post("/events", (req, res) => {
  const { data } = req;
  console.log(data);
  res.send({});
});

app.listen(4000, () => {
  console.log("--post on:hi from v2--");
  console.log("--post on: 4000--");
});
