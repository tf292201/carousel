import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    const nextIdx = currCardIdx === total - 1 ? 0 : currCardIdx + 1;
    setCurrCardIdx(nextIdx);
  }

  //Decrements currCardIdx state by 1
  function goBackward() {
    const prevIdx = currCardIdx === 0 ? total - 1 : currCardIdx - 1;
    setCurrCardIdx(prevIdx);
  }

 
  return (
    <div className="Carousel">
    <h1>{title}</h1>
    <div className="Carousel-main">
      {currCardIdx !== 0 && ( // Render left arrow only if not on the first image
        <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward} // Call goBackward when left arrow is clicked
        />
      )}
      <Card
        caption={photos[currCardIdx].caption}
        src={photos[currCardIdx].src}
        currNum={currCardIdx + 1}
        totalNum={total}
      />
      {currCardIdx !== total - 1 && ( // Render right arrow only if not on the last image
        <i
          className="bi bi-arrow-right-circle"
          onClick={goForward} // Call goForward when right arrow is clicked
        />
      )}
    </div>
  </div>
  );
}

export default Carousel;
