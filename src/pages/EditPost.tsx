import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { openIndexedDB } from "../utils/indexedDB";
import useWriteInput from "../hooks/useWriteInput";

import Title from "../components/Title";
import WriteForm from "../components/WriteForm";

import { PostType } from "../type";

function EditPost() {
  const params = useParams();
  const navigator = useNavigate();
  const { textarea, writerInput, titleInput } = useWriteInput();
  const [post, setPost] = useState<PostType>();

  const editPost = async () => {
    if (
      textarea.current === null ||
      writerInput.current === null ||
      titleInput.current === null ||
      post === undefined
    ) {
      return;
    }

    const content = textarea.current.value;
    const writer = writerInput.current.value;
    const title = titleInput.current.value;
    if (title === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (writer === "") {
      alert("작성자를 입력해주세요.");
      return;
    }
    if (content.length < 10) {
      alert("10글자이상 작성해주세요.");
      return;
    }
    openIndexedDB("PATCH", {
      ...post,
      content: content.trim(),
      writer: writer.trim(),
      title: title.trim(),
    });
    alert("수정되었습니다.");
    navigator(`/post/${post.key}`);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const res = await openIndexedDB("GET", params.key);
      setPost(res as PostType);
    };
    fetchPost();
  }, [params.key]);

  return (
    <div className="w-144 flex flex-col gap-2 relative">
      <Title name="글 수정" goBackButton={true} />
      <WriteForm
        textarea={textarea}
        titleInput={titleInput}
        writerInput={writerInput}
        post={post}
      />
      <div className="flex justify-end">
        <button
          className="w-14 px-2 py-1 border border-slate-600 rounded text-slate-600"
          onClick={editPost}
        >
          저장
        </button>
      </div>
    </div>
  );
}

export default EditPost;
