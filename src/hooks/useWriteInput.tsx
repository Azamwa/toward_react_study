import { useRef } from "react";

function useWriteInput() {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const writerInput = useRef<HTMLInputElement>(null);
  const titleInput = useRef<HTMLInputElement>(null);

  return { textarea, writerInput, titleInput };
}

export default useWriteInput;
