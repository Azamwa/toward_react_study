import { useCallback, useState } from "react";

function useForm<T>(initialForm: T) {
  const [form, setValue] = useState(initialForm);

  const setForm = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
    setValue((state) => ({ ...state, [key]: value }));
  }, []);

  return { form, setForm };
}

export default useForm;
