import { useState } from "react";
import Todo from "../todo";
interface addProps {
  add(item: Todo): void;
}

export default function Add({ add }: addProps) {
  const [value, setValue] = useState<string>("");

  function handleInputValueChange(e: any) {
    setValue(e.target.value);
  }

  return (
    <>
      <input type="text" value={value} onChange={handleInputValueChange} />
      <button
        onClick={() => {
          if (value) add({ value: value, isDone: false });
        }}
      >
        add
      </button>
    </>
  );
}
