import { useNavigate } from "react-router-dom";

import { PostType } from "../type";

interface BoardListProps {
  postList: PostType[];
}

function BoardList({ postList }: BoardListProps) {
  const navigator = useNavigate();

  return (
    <ul className="shadow-sm select-none">
      <li className="flex h-10 border-b bg-slate-200 text-sm">
        <div className="flex-[1_1_0] flex justify-center items-center">
          <input type="checkbox" />
        </div>
        <div className="flex-[1_1_0] flex justify-center items-center">No.</div>
        <div className="flex-[7_1_0] flex justify-center items-center">
          제목
        </div>
        <div className="flex-[3_1_0] flex justify-center items-center">
          작성자
        </div>
        <div className="flex-[1_1_0] flex justify-center items-center">
          조회수
        </div>
      </li>
      {postList.length === 0 ? (
        <li className="h-10 flex items-center justify-center text-sm border-b">
          검색된 결과가 없습니다.
        </li>
      ) : (
        postList.map((post, index) => (
          <li
            className="flex h-10 border-b bd-slate-400 hover:cursor-pointer hover:bg-slate-100 text-sm"
            onClick={() => navigator(`/post/${post.key}`)}
            key={post.key}
          >
            <div className="flex-[1_1_0] flex justify-center items-center">
              <input type="checkbox" />
            </div>
            <div className="flex-[1_1_0] flex justify-center items-center">
              {index + 1}
            </div>
            <div className="flex-[7_1_0] flex justify-center items-center">
              {post.title}
            </div>
            <div className="flex-[3_1_0] flex justify-center items-center">
              {post.writer}
            </div>
            <div className="flex-[1_1_0] flex justify-center items-center">
              {post.hit}
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default BoardList;
