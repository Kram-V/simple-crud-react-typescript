import React from "react";
import PostList from "./PostList";
import { Post } from "../App";
import { Link } from "react-router-dom";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const Homepage: React.FC<Props> = ({ posts, setPosts }) => {
  return (
    <div>
      <Link to="/create">
        <button type="button" className="btn btn-dark mt-3">
          Create Post
        </button>
      </Link>

      <h1 className="my-5">Simple CRUD App</h1>

      {posts.map((post) => {
        return (
          <PostList
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            setPosts={setPosts}
          />
        );
      })}
    </div>
  );
};

export default Homepage;
