import { Link } from "react-router-dom";
import Title from "../components/Title";
import BoardList from "../components/BoardList";

import { PostType } from "../type";

const postList: PostType[] = [
  {
    key: crypto.randomUUID(),
    title: "에효",
    content: "뭐하냐",
    writer: "오징어",
    hit: 0,
  },
  {
    key: crypto.randomUUID(),
    title: "굿",
    content: "ㅁㄴㅇ",
    writer: "오징어",
    hit: 0,
  },
  {
    key: crypto.randomUUID(),
    title: "ㅍㅍㅍㅍㅍ",
    content: "ㅇㅀ",
    writer: "오징어",
    hit: 0,
  },
  {
    key: crypto.randomUUID(),
    title: "녹턴op09-02",
    content: "아멘",
    writer: "쇼팽",
    hit: 0,
  },
  {
    key: crypto.randomUUID(),
    title: "드가자",
    content: "쇼생크탈출",
    writer: "맷데이먼",
    hit: 2,
  },
  {
    key: crypto.randomUUID(),
    title: "매드맥스 봐라",
    content: "재밋더라",
    writer: "톰하디",
    hit: 5,
  },
];

function Board() {
  return (
    <>
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
    </>
  );
}

export default Board;
