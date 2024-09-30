import useGameDB from '../../config/useGameDB';
import './_Recommendation.scss'

type GameData = {
  index: number;
};

const Recommendation = ({ index }: GameData) => {
  const { BaseContent } = useGameDB();

  return (
    <div className="game">
      <div className="game__textarea">
        <h2 className="game__heading">{BaseContent[index]?.title || "Loading title..."}</h2>
        <p className="game__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et alias ipsam quasi doloribus reiciendis animi deserunt autem,</p>
        <button className="game__button">
          <a className="game__buy">Buy now</a>
          <span className="game__new-price">
            {BaseContent[index]?.salePrice || "0"}
            {"$ "}
            <span className="game__old-price">
              {BaseContent[index]?.normalPrice || "0"}$
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Recommendation