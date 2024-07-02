import { ChangeEvent, useState } from "react";

interface Props {
  onNewCategory(value: string): void;
}

export const AddCategory = ({ onNewCategory }: Props) => {
  const [inpustValue, setInpustValue] = useState("");

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInpustValue(target.value);
  };

  // ** Cualquier set del useState, se le pasa un callback para desestructurarlo y poder usar los estados sin pasar todo el objecto
  const onsubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valueInput = inpustValue.trim().toLowerCase();
    valueInput.length <= 1 ? null : onNewCategory(valueInput);
    setInpustValue("");
  };

  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="Search Gifs"
        value={inpustValue}
        onChange={onInputChange}
      />
    </form>
  );
};
