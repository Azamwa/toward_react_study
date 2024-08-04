import { useNavigate } from "react-router-dom";
import { openIndexedDB } from "../utils/indexedDB";
import useWriteInput from "../hooks/useWriteInput";

import Title from "../components/Title";

function WriteBoard() {
  const navigator = useNavigate();
  const { textarea, writerInput, titleInput } = useWriteInput();

  const savePost = () => {
    if (
      textarea.current === null ||
      writerInput.current === null ||
      titleInput.current === null
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
    openIndexedDB("POST", {
      key: crypto.randomUUID(),
      title: title.trim(),
      content: content.trim(),
      writer: writer.trim(),
      hit: 0,
    });
    alert("저장되었습니다.");
    navigator("/");
  };

  return (
    <div className="w-144 flex flex-col gap-2 relative">
      <Title name="글쓰기" goBackButton={true} />
      <div className="flex gap-2">
        <input
          className="flex-[5_1_0] h-8 px-3 border border-slate-600 rounded outline-none text-sm"
          type="text"
          ref={titleInput}
          placeholder="제목"
        />
        <input
          className="flex-[1_1_0] h-8 px-3 border border-slate-600 rounded outline-none text-sm"
          type="text"
          ref={writerInput}
          placeholder="작성자"
        />
      </div>
      <textarea
        className="min-h-40 p-3 border border-slate-600 rounded-md outline-none resize-none"
        ref={textarea}
        placeholder="글 적어라"
      />
      <div className="flex justify-end">
        <button
          className="w-14 px-2 py-1 border border-slate-600 rounded text-slate-600 ve"
          onClick={savePost}
        >
          저장
        </button>
      </div>
    </div>
  );
}

export default WriteBoard;
