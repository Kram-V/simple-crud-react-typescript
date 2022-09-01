import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Post } from "../App";

interface Props {
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const CreatePost: React.FC<Props> = ({ setPosts }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const inputData = {
      id: Date.now(),
      title,
      description,
    };

    setPosts((prev): Post[] => {
      return [...prev, inputData];
    });

    setTitle("");
    setDescription("");

    navigate("/");
  };

  return (
    <div style={{ width: "30%", margin: "0 auto" }} className="mb-5">
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group mt-3">
          <textarea
            className="form-control"
            id="description"
            rows={3}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="d-flex justify-content-center gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Create
          </button>

          <Link to="/">
            <button type="button" className="btn btn-dark">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
