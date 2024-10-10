import { useState, useEffect } from 'react';


const useLikeConfig = (gameId: string) => {
  const [likeGame, setLikeGame] = useState(() => {
    const savedLikeGame = localStorage.getItem(`likeGame_${gameId}`);
    return savedLikeGame ? JSON.parse(savedLikeGame) : false;
  });

  useEffect(() => {
    localStorage.setItem(`likeGame_${gameId}`, JSON.stringify(likeGame));
  }, [likeGame, gameId]);

  const likeGameToggle = () => {
    setLikeGame((prev: boolean) => !prev);
  };

  return { likeGame, likeGameToggle };
};


export default useLikeConfig;