import { BsHeart, BsHeartFill } from "react-icons/bs";
import useLikeConfig from '../../config/useLikeConfig';

interface OfferLikeButtonProps {
  gameId: string;
}

const OfferLikeButton: React.FC<OfferLikeButtonProps> = ({ gameId }) => {
  const { likeGame, likeGameToggle } = useLikeConfig(gameId);

  const handleLikeClick = () => {
    likeGameToggle();
  };

  return (
    <div onClick={handleLikeClick} className="offer__like-btn">
      {likeGame ? <BsHeartFill/> : <BsHeart/>}
    </div>
  );
};

export default OfferLikeButton;
