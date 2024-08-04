import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "../pages/Board";
import WriteBoard from "../pages/WriteBoard";
import Post from "../pages/Post";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/write" element={<WriteBoard />} />
        <Route path="/post/:key" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
