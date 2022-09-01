import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Post } from "../App";

interface Props {
  posts: Post[];
}

const SinglePost: React.FC<Props> = ({ posts }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { id } = useParams();

  const currentData = posts.find((post) => post.id == Number(id));

  useEffect(() => {
    if (currentData) {
      setTitle(currentData.title);
      setDescription(currentData.description);
    }
  }, []);

  return (
    <div>
      <h1 className="mt-5">{title}</h1>
      <p>{description}</p>

      <Link to="/">
        <button className="btn btn-dark">Back</button>
      </Link>
    </div>
  );
};

export default SinglePost;
