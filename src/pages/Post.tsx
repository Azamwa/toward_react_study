import { useParams } from "react-router-dom";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { openIndexedDB } from "../utils/indexedDB";
import { PostType } from "../type";

function Post() {
  const params = useParams();
  const [post, setPost] = useState<PostType>();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await openIndexedDB("GET", params.key);
      setPost(res as PostType);
    };
    fetchPost();
  }, [params.key]);

  return (
    <div className="w-144 flex flex-col gap-2 relative">
      <Title name={post?.title ?? ""} goBackButton={true} />
      <div className="pb-2 border-b border-gray-700 flex justify-between ">
        <p>작성자: {post?.writer}</p>
        <p>조회수: {post?.hit ?? 0}</p>
      </div>
      <pre className="min-h-40">{post?.content}</pre>
      <div className="flex justify-end">
        <button className="px-2 py-1 border border-slate-600 text-slate-600 rounded-md">
          수정
        </button>
      </div>
    </div>
  );
}

export default Post;
