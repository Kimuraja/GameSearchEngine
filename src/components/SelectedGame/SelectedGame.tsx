import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useChosenStore from "../../config/useChosenStore";
import useStore from "../../config/useStore";
import "./_SelectedGame.scss";
import React from "react";

const SelectedGame: React.FC = () => {
  const { dealID } = useParams<{ dealID: string }>();
  const { gameData, getID } = useChosenStore();
  const { storeData } = useStore();
  const cheaperGameList = gameData?.cheaperStores || []
  console.log();

  useEffect(() => {
    if (dealID) {
      getID(dealID);
    }
  }, [dealID, getID]);

  const date = new Date(Number(gameData?.gameInfo?.releaseDate) * 1000);
  const formattdDate = date.toLocaleDateString("pl-PL");
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="game">
            <div className="game__header">
              <img src={gameData?.gameInfo?.thumb} alt="img" className="game__image" />
              <div className="game__header--textarea">
                <h2>
                  <a className="game__heading"
                    href={
                      gameData?.cheaperStores?.[0]?.salePrice
                        ? `https://www.cheapshark.com/redirect?dealID=${gameData?.cheaperStores[0]?.dealID}`
                        : `https://www.metacritic.com${gameData?.gameInfo?.metacriticLink}`
                      }
                      target="_blank"
                  >
                    {`${gameData?.gameInfo?.name || "Loading..."}`}
                  </a>
                </h2>

                <p className="game__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error harum adipisci quo veritatis beatae nostrum fuga id
                  quam!
                </p>
              </div>
              <div className="decoration"></div>
              <ul className="game__header--list">
                <li>
                  Sale Price: <span id="price"> {gameData?.cheaperStores[0]?.salePrice ? gameData?.cheaperStores[0]?.salePrice : gameData?.gameInfo?.salePrice}$</span>
                </li>
                <li>
                  Regular Price: <span id="retail"> {gameData?.gameInfo?.retailPrice}$</span>
                </li>
                <li>
                  Metacritic Score: <span id="critic"> {gameData?.gameInfo?.metacriticScore}</span>
                </li>
                <li>
                  Release Date: <span id="releaseDate">{formattdDate}</span>
                </li>
              </ul>
            </div>

            <div className="game__body">
              {cheaperGameList && cheaperGameList.length > 0 ? (
                <div className="game__list-content">
                  {cheaperGameList.map((store) => (
                    <ul key={store.dealID} className="game__offer-list">
                      <li>
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
                      <li> Sale Price: <span id="price">{store.salePrice}$</span></li>
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
                <h1>No Offer Found</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedGame;
