import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useStores from "../../config/useStores";
import "./_SelectedGame.scss";
import React from "react";
import useGameDB from "../../config/useGameDB";
import Deals from "../Deals/Deals";
import useSelectedGame from "../../config/useSelectedGame";
import Loading from "../Loading/Loading";

const SelectedGame: React.FC = () => {
  const { gameID } = useParams<{ gameID: string }>();
  const { gameData, fetchGameDataByGameID } = useSelectedGame();
  const { storeData } = useStores();
  const cheaperGameList = gameData?.deals || [];
  const { filterGamesList } = useGameDB();
  const score = filterGamesList.find((game) => game.title === gameData?.info?.title);
  const [loading, setLoading] = useState(true);

  const sortedCheaperGameList = cheaperGameList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

  useEffect(() => {
    if (gameID) {
      setLoading(true); 
      fetchGameDataByGameID(gameID).finally(() => setLoading(false));
    }
  }, [gameID, fetchGameDataByGameID]);

  const date = gameData?.cheapestPriceEver?.date
    ? new Date(gameData.cheapestPriceEver.date * 1000)
    : undefined;
  const formattdDate = date ? date.toLocaleDateString("pl-PL") : "Loading Date...";

  if (loading) {
    return <Loading/>;
  }

  if (!gameData || !gameData.info) {
    return <h1>No game data found</h1>;
  }

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="game">
            <div className="game__header">
              <img src={gameData.info.thumb} alt="img" className="game__image" />
              <div className="game__header--textarea">
                <h2>
                    {`${gameData.info.title}`}
                </h2>
              </div>
              <div className="decoration"></div>
              <ul className="game__header--list">
                <li>
                  Cheapest offer: <span id="price">{gameData?.deals[0].price}$</span><a
                      href={`https://www.cheapshark.com/redirect?dealID=${gameData?.deals[0].dealID}`}
                      target="_blank"
                      id="shopNow"
                    >Link to the cheapset offer
                  </a>
                </li>
                <li>Regular price: <span id="retail">{gameData?.deals[0]?.retailPrice}$</span></li>
                <li>Metacritic Score: <span id="critic">{score?.metacriticScore}</span></li>
                <li>Release Date: <span id="releaseDate">{formattdDate}</span></li>
              </ul>
            </div>

            <div className="game__body">
              {sortedCheaperGameList.length > 0 ? (
                <div className="game__list-content">
                  {sortedCheaperGameList.slice(0, 5).map((store) => (
                    <a
                      href={`https://www.cheapshark.com/redirect?dealID=${store.dealID}`}
                      target="_blank"
                      id="shopLink"
                      key={store.dealID}
                    >
                      <ul className="game__offer-list">
                        <li className="game__list-content">
                          <img
                            src={`https://www.cheapshark.com${
                              storeData.find(
                                (storeDataItem) => storeDataItem?.storeID === store.storeID
                              )?.images["icon"] || "Unknown Store"
                            }`}
                            alt="store-icon"
                            className="game__list-icon"
                          />
                        </li>
                        <li>Sale Price: <span id="price">{store.price}$</span></li>
                        <li>Regular Price: <span id="retail">{store.retailPrice}$</span></li>
                        <li>
                          <a
                            href={`https://www.cheapshark.com/redirect?dealID=${store.dealID}`}
                            target="_blank"
                            id="shopNow"
                          >
                            Link to the offer
                          </a>
                        </li>
                      </ul>
                    </a>
                  ))}
                </div>
              ) : (
                <h1>No offers has been found</h1>
              )}
            </div>
          </div>
        </div>
        <Deals />
      </div>
    </section>
  );
};

export default SelectedGame;
