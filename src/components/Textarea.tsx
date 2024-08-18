import { ChangeEvent } from "react";

interface Textarea {
  value: string;
  setValue: (value: string) => void;
}

function Textarea({ value, setValue }: Textarea) {
  const chagneValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <textarea
      className="min-h-40 p-2 border border-slate-600 
        outline-none resize-none rounded text-sm"
      placeholder="적어라"
      value={value}
      onChange={(e) => chagneValue(e)}
    />
  );
}

export default Textarea;
