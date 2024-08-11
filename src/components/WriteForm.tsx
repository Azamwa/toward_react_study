import { RefObject } from "react";
import { PostType } from "../type";

interface WriteFormProps {
  titleInput: RefObject<HTMLInputElement>;
  writerInput: RefObject<HTMLInputElement>;
  textarea: RefObject<HTMLTextAreaElement>;
  post?: PostType;
}

function WriteForm({
  textarea,
  titleInput,
  writerInput,
  post,
}: WriteFormProps) {
  return (
    <>
      <div className="flex gap-2">
        <input
          className="flex-[5_1_0] h-8 px-3 border border-slate-600 rounded outline-none text-sm"
          type="text"
          ref={titleInput}
          placeholder="제목"
          defaultValue={post?.title}
        />
        <input
          className="flex-[1_1_0] h-8 px-3 border border-slate-600 rounded outline-none text-sm"
          type="text"
          ref={writerInput}
          placeholder="작성자"
          defaultValue={post?.writer}
        />
      </div>
      <textarea
        className="min-h-40 p-3 border border-slate-600 rounded-md outline-none resize-none"
        ref={textarea}
        placeholder="글 적어라"
        defaultValue={post?.content}
      />
    </>
  );
}

export default WriteForm;
