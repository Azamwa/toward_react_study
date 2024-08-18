import { ChangeEvent } from "react";

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
}

function Input({ value, setValue, placeholder }: InputProps) {
  const chagneValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      className="h-8 px-3 border border-slate-600 rounded outline-none text-sm"
      type="text"
      value={value}
      onChange={(e) => chagneValue(e)}
      placeholder={placeholder ?? ""}
    />
  );
}

export default Input;
