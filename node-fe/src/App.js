import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div className="container mt-3">
      <h1>Create post</h1>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
