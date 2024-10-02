import useGameDB from "../../config/useGameDB";

type GameData = {
  index: number;
};

const SliderTextarea = ({ index }: GameData) => {
  const { gameDetails } = useGameDB();

  return (
    <div className="slider__textarea">
      <div className="slider__description">
        <h2 className="slider__heading">
          {gameDetails[index]?.title || "Loading title..."}
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
              {gameDetails[index]?.salePrice || "0"}
              {"$ "}
              <span className="slider__old-price">
                {gameDetails[index]?.normalPrice || "0"}$
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderTextarea;
