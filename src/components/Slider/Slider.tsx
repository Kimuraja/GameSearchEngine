import { useState } from "react";
import "./_Slider.scss";
import { BsRecord, BsRecordFill } from "react-icons/bs";
import SliderTextarea from "./SliderTextarea";
import useLikeConfig from "../../config/useLikeConfig";

type T = {
  imageUrls: string[];
};

const Slider = ({ imageUrls }: T) => {
  const [imageIndex, setImageIndex] = useState(0);
  const {likeGame, likeGameToggle} = useLikeConfig()


  return (
    <section className="slider">
      <div className="slider__slides">
        {imageUrls.map((key, index) => (
          <img
            key={index}
            src={key}
            alt={key}
            className="slider-images"
            style={{ translate: `${-100 * imageIndex}%` }}
            draggable='false'
          />
        ))}

        <div className="slider__buttons">
          {imageUrls.map((_, index) => (
            <button
            key={index}
            className="slider__dot-button"
            onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? <BsRecordFill /> : <BsRecord />}
            </button>
          ))}
        </div>
        <SliderTextarea index={imageIndex} toggle={likeGameToggle} like={likeGame}/>

      </div>
    </section>
  );
};


export default Slider;