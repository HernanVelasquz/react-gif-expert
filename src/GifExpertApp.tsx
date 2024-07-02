import { useState } from "react";
import { AddCategory, GifGrid, Title } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (newCategory: string) => {
    categories.includes(newCategory)
      ? null
      : setCategories([...categories, newCategory]);
  };

  return (
    <>
      <Title />

      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
