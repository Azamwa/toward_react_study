import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "../pages/Board";
import WriteBoard from "../pages/WriteBoard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/write" element={<WriteBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
