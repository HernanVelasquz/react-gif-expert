import { ResponseGifPhy, ResponseGetGift } from "./interfaces";

export const getGifs = async (category: string): Promise<ResponseGetGift[]> => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=BylSfgJKQGkV8EXvELi6qBi5BzfRZX9x&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = (await resp.json()) as ResponseGifPhy;

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
