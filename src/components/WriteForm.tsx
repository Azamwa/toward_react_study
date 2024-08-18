import { WriteFormType } from "../type";
import Input from "./Input";
import Textarea from "./Textarea";

interface WriteFormProps {
  form: WriteFormType;
  setForm: <K extends keyof WriteFormType>(
    key: K,
    value: WriteFormType[K]
  ) => void;
}

function WriteForm({ form, setForm }: WriteFormProps) {
  return (
    <>
      <div className="flex gap-2">
        <div className="flex-[5_1_0]">
          <Input
            placeholder="제목"
            value={form.title}
            setValue={(value) => setForm("title", value)}
          />
        </div>
        <div className="flex-[1_1_0]">
          <Input
            placeholder="작성자"
            value={form.writer}
            setValue={(value) => setForm("writer", value)}
          />
        </div>
      </div>
      <Textarea
        value={form.content}
        setValue={(value) => setForm("content", value)}
      />
    </>
  );
}

export default WriteForm;
