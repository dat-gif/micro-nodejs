import bodyParser from "body-parser";
import express from "express";
import axios from "axios";

const app = express();
app.use(bodyParser.json());

app.post("/events", async (res, req) => {
  const { type, data } = req.body;
  if (type === "CommentCreated") {
    const status = data.content.include("orange") ? "rejected" : "approved";
    await axios.post("http://localhost:5000/events", {
      type: "CommentModerated",
      data: { id: data.id, postId: data.postId, status, content },
    });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log("-- moderation: 4003 --");
});
