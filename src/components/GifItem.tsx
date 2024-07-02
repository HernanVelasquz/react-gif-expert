import { ResponseGetGift } from "../helpers";

export const GifItem = ({ title, url }: ResponseGetGift) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
