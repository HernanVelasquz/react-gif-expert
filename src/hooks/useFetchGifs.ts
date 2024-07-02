import { useState, useEffect } from "react";

import { getGifs } from "../helpers/getGifs";
import { ResponseGetGift } from "../helpers/interfaces";

export const useFetchGifs = (category: string) => {
    const [images, setImages] = useState<ResponseGetGift[]>([]);
    const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading
  }
}
