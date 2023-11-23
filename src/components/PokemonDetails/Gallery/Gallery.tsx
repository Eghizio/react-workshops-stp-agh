import { useState } from "react";
import s from "./Gallery.module.css";

interface Props {
  imageUrls: string[];
}

export const Gallery = ({ imageUrls }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const image = imageUrls[currentIndex];
  const imageCount = imageUrls.length;

  const next = () => setCurrentIndex((idx) => ++idx % imageCount);

  const previous = () =>
    setCurrentIndex((idx) => {
      const prev = idx - 1;

      return (prev < 0 ? imageCount - 1 : prev) % imageCount;
    });

  return (
    <div>
      <h2>Gallery</h2>
      {imageUrls.length === 0 ? (
        <div className="center">No images to display</div>
      ) : (
        <div className={s.gallery}>
          <div className={s.arrowBtn} role="button" onClick={previous}>
            ⬅️
          </div>
          <img
            className={s.img}
            src={image}
            alt={`Image number ${currentIndex}`}
          />
          <div className={s.arrowBtn} role="button" onClick={next}>
            ➡️
          </div>
        </div>
      )}
    </div>
  );
};
