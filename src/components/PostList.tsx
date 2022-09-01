import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../App";

interface Props {
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  id: number;
  title: string;
  description: string;
}

const PostList: React.FC<Props> = ({ title, description, id, setPosts }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      setPosts((prev): Post[] => {
        return prev.filter((data) => data.id !== id);
      });
    }
  };

  return (
    <div className="card mb-5" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">{description}</p>
      </div>

      <div className="d-flex justify-content-center gap-2">
        <Link to={`/post/${id}`}>
          <button type="button" className="btn btn-success">
            View
          </button>
        </Link>

        <Link to={`/${id}`}>
          <button type="button" className="btn btn-primary">
            Edit
          </button>
        </Link>

        <button onClick={handleDelete} type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostList;
