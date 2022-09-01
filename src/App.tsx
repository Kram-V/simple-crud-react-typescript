import React, { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Homepage from "./components/Homepage";
import EditPost from "./components/EditPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost";

export interface Post {
  id: number;
  title: string;
  description: string;
}

const postData = [
  { id: 1, title: "Typescript", description: "Learning typescript" },
  { id: 2, title: "Javascript", description: "I really like javascript" },
];

function App() {
  const [posts, setPosts] = useState<Post[]>(postData);

  return (
    <Router>
      <div className="App container">
        <Routes>
          <Route
            path="/"
            element={<Homepage posts={posts} setPosts={setPosts} />}
          />

          <Route path="/create" element={<CreatePost setPosts={setPosts} />} />
          <Route
            path="/:id"
            element={<EditPost posts={posts} setPosts={setPosts} />}
          />
          <Route path="/post/:id" element={<SinglePost posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
