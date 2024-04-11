import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [list, setList] = useState({});

  const fetchPost = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setList(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {Object.values(list).map((post) => {
        return (
          <div className="card mb-2" key={post.id}>
            <div className="card-body">
              <h3>{post.title}</h3>
              <CommentCreate postId={post.id} />
              <CommentList comments={post.comments} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
