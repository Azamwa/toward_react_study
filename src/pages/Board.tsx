import { Link } from "react-router-dom";
import { fetchPost } from "../utils/apiRequest";

import Title from "../components/Title";
import BoardList from "../components/BoardList";
import { useEffect, useState } from "react";
import { PostType } from "../type";

function Board() {
  const [postList, setPostList] = useState<PostType[]>([]);

  useEffect(() => {
    const getPostList = async () => {
      const res = await fetchPost();
      setPostList(res);
    };
    getPostList();
  }, []);

  return (
    <div className="w-144 flex flex-col gap-2 relative">
      <Title name="게시글" size="2xl" />
      <div className="flex gap-2 absolute right-0 top-0">
        <button className="px-2 py-1 border border-red-500 rounded-md text-red-500">
          삭제
        </button>
        <button className="px-2 py-1 border border-slate-500 rounded-md text-slate-500">
          <Link to="/write">글쓰기</Link>
        </button>
      </div>
      <BoardList postList={postList} />
    </div>
  );
}

export default Board;
