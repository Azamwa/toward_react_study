import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "../pages/Board";
import WriteBoard from "../pages/WriteBoard";
import Post from "../pages/Post";
import EditPost from "../pages/EditPost";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/write/" element={<WriteBoard />} />
        <Route path="/post/:key" element={<Post />} />
        <Route path="/editPost/:key" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
