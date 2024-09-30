import useGameDB from "../../config/useGameDB";
import { BsHeart, BsHeartFill } from "react-icons/bs";

type GameData = {
  index: number;
  toggle: () => void;
  like: boolean;
};

const SliderTextarea = ({ index, toggle, like }: GameData) => {
  const { BaseContent } = useGameDB();

  return (
    <div className="slider__textarea">
      <div className="slider__description">
        <h2 className="slider__heading">
          {BaseContent[index]?.title || "Loading title..."}
        </h2>
        <p className="slider__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          molestias dignissimos obcaecati, unde laudantium aspernatur nemo
          impedit qui?
        </p>
        <div className="slider__button-section">
          <button className="slider__button">
            <a className="slider__buy-tag">Buy now</a>
            <span className="slider__new-price">
              {BaseContent[index]?.salePrice || "0"}
              {"$ "}
              <span className="slider__old-price">
                {BaseContent[index]?.normalPrice || "0"}$
              </span>
            </span>
          </button>
          <button className="slider__button-like" onClick={toggle}>
            {like ? <BsHeartFill /> : <BsHeart />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderTextarea;
