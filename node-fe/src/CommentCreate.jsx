import axios from "axios";
import React, { useState } from "react";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comment`, {
      content,
    });
    setContent("");
  };
  return (
    <form className="form-group" onSubmit={onSubmit}>
      <label>New Item</label>
      <input
        type="text"
        className="form-control mb-3"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button className="btn btn-primary">comment</button>
    </form>
  );
};

export default CommentCreate;
