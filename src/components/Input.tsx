import { ChangeEvent } from "react";

interface InputProps {
  value: string | number;
  setValue: (value: string | number) => void;
  placeholder?: string;
}

function Input({ value, setValue, placeholder }: InputProps) {
  const chagneValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => chagneValue(e)}
      placeholder={placeholder ?? ""}
    />
  );
}

export default Input;
