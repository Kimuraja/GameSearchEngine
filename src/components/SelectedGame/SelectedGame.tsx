import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useStores from "../../config/useStores";
import "./_SelectedGame.scss";
import React from "react";
import useGameDB from "../../config/useGameDB";
import Deals from "../Deals/Deals";
import useSelectedGame from "../../config/useSelectedGame";

const SelectedGame: React.FC = () => {
  const { gameID } = useParams<{ gameID: string }>();
  const { gameData, fetchDealsByID } = useSelectedGame();
  const { storeData } = useStores();
  const cheaperGameList = gameData?.deals || []
  const { filterGame } = useGameDB()
  const score = filterGame.find((game) => game.title === gameData?.info?.title)

  useEffect(() => {
    if (gameID) {
      fetchDealsByID(gameID);
    }
  }, [gameID, fetchDealsByID]);


  const date = gameData?.cheapestPriceEver?.date
  ? new Date(gameData.cheapestPriceEver.date * 1000)
  : undefined;
  const formattdDate = date ? date.toLocaleDateString("pl-PL") : "Loading Date...";

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="game">
            <div className="game__header">
              <img src={gameData?.info.thumb} alt="img" className="game__image" />
              <div className="game__header--textarea">
                <h2>
                  <a className="game__heading"
                    href={`https://www.cheapshark.com/redirect?dealID=${gameData?.deals[0].dealID}`}
                    target="_blank"
                  >
                    {`${gameData?.info?.title || "Loading..."}`}
                  </a>
                </h2>
              </div>
              <div className="decoration"></div>
              <ul className="game__header--list">
                <li>
                  Sale Price: <span id="price">{gameData?.deals[0]?.price}$</span>
                </li>
                <li>Regular Price: <span id="retail">{gameData?.deals[0]?.retailPrice}$</span></li>
                <li>Metacritic Score: <span id="critic">{score?.metacriticScore}</span></li>
                <li>Release Date: <span id="releaseDate">{formattdDate}</span></li>
              </ul>
            </div>

            <div className="game__body">
              {cheaperGameList && cheaperGameList.length > 0 ? (
                <div className="game__list-content">
                  {cheaperGameList.slice(0, 5).map((store) => (
                    <ul key={store.dealID} className="game__offer-list">
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
                          id="shopNow"
                          target="_blank"
                        >
                          Shop now!
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
              ) : (
                <h1>Loading Data...</h1>
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
