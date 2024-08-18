import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { openIndexedDB } from "../utils/indexedDB";

import Title from "../components/Title";
import WriteForm from "../components/WriteForm";

import { PostType, WriteFormType } from "../type";
import useForm from "../hooks/useInputForm";

function EditPost() {
  const params = useParams();
  const navigator = useNavigate();
  const { form, setForm } = useForm<WriteFormType>({
    content: "",
    title: "",
    writer: "",
  });
  const [post, setPost] = useState<PostType>({
    key: params.key ?? "",
    title: "",
    writer: "",
    content: "",
    hit: 0,
  });

  const editPost = async () => {
    if (form.title === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (form.writer === "") {
      alert("작성자를 입력해주세요.");
      return;
    }
    if (form.content.length < 10) {
      alert("10글자이상 작성해주세요.");
      return;
    }
    openIndexedDB("PATCH", {
      ...post,
      content: form.content.trim(),
      writer: form.writer.trim(),
      title: form.title.trim(),
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
      <WriteForm form={form} setForm={setForm} />
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
