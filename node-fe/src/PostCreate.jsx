import axios from "axios";
import React, { useState } from "react";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/posts", { title });
    setTitle("");
  };

  return (
    <form className="form-group" onSubmit={onSubmit}>
      <label>Title</label>
      <input
        type="text"
        className="form-control mb-3"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button className="btn btn-primary">post</button>
    </form>
  );
};

export default PostCreate;
