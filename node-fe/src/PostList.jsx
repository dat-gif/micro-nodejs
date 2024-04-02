import axios from "axios";
import React, { useEffect, useState } from "react";

const PostList = () => {
  const [list, setList] = useState({});

  const fetchPost = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setList(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, [list]);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {Object.values(list).map((post) => {
        return (
          <div className="card mb-2" key={post.id}>
            <div className="card-body">
              <h3>{post.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
