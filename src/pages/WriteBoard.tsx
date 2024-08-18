import { useNavigate } from "react-router-dom";
import { openIndexedDB } from "../utils/indexedDB";
import useForm from "../hooks/useInputForm";

import Title from "../components/Title";
import WriteForm from "../components/WriteForm";

import { WriteFormType } from "../type";

function WriteBoard() {
  const navigator = useNavigate();
  const { form, setForm } = useForm<WriteFormType>({
    title: "",
    content: "",
    writer: "",
  });

  const savePost = () => {
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
    openIndexedDB("POST", {
      key: crypto.randomUUID(),
      title: form.title.trim(),
      content: form.content.trim(),
      writer: form.writer.trim(),
      hit: 0,
    });
    alert("저장되었습니다.");
    navigator("/");
  };

  return (
    <div className="w-144 flex flex-col gap-2 relative">
      <Title name="글쓰기" goBackButton={true} />
      <WriteForm form={form} setForm={setForm} />
      <div className="flex justify-end">
        <button
          className="w-14 px-2 py-1 border border-slate-600 rounded text-slate-600"
          onClick={savePost}
        >
          저장
        </button>
      </div>
    </div>
  );
}

export default WriteBoard;
