import { ChangeEvent } from "react";

interface Textarea {
  value: string | number;
  setValue: (value: string | number) => void;
}

function Textarea({ value, setValue }: Textarea) {
  const chagneValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return <textarea value={value} onChange={(e) => chagneValue(e)} />;
}

export default Textarea;
