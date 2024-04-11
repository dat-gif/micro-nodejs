import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentList = ({ comments }) => {
  // const [comments, setComment] = useState([]);
  // const fetchComments = async () => {
  //   const res = await axios.get(
  //     `http://localhost:4001/posts/${postId}/comment`
  //   );
  //   setComment(res.data);
  // };

  // useEffect(() => {
  //   fetchComments();
  // }, []);

  return (
    <ul>
      {comments.map((comment) => {
        let content;
        if (comment.status == "approved") {
          content = comment.content;
        }
        if (comment.status == "pending") {
          content = "Pending";
        }
        if (comment.status == " rejected") {
          return;
        }
        return <li key={comment.id}>{content}</li>;
      })}
    </ul>
  );
};

export default CommentList;
