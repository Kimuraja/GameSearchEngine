import { BsHeart, BsHeartFill } from "react-icons/bs";
import useLikeConfig from '../../config/useLikeConfig';


const OfferLikeButton = () => {
  const { likeGame, likeGameToggle } = useLikeConfig();

  const handleLikeClick = () => {
    likeGameToggle()
  };

  return (
    <div onClick={handleLikeClick} className="offer__like-btn">
      {likeGame ? <BsHeartFill/> : <BsHeart/>}
    </div>
  );
};

export default OfferLikeButton;
