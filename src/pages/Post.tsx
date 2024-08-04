import { useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title";

function Post() {
  const params = useParams();

  return (
    <div className="w-144 flex flex-col gap-2 relative">
      <Title name="상세" goBackButton={true} />
      <div className="flex justify-between">
        <p>작성자: </p>
        <p>조회수: 0</p>
      </div>
      <pre className="min-h-40">{params.key}</pre>
      <div className="flex justify-end">
        <button className="px-2 py-1 border border-slate-600 text-slate-600 rounded-md">
          수정
        </button>
      </div>
    </div>
  );
}

export default Post;
