import { useState } from "react";

const useLikeConfig = () => {
  const [likeGame, setLikeGame] = useState(false);


  const likeGameToggle = () => {
    setLikeGame(!likeGame);
  };

  return {likeGame, likeGameToggle}

}

export default useLikeConfig