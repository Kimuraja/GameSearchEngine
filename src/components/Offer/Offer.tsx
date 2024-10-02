import React from "react";
import cyberpunk from '../../media/cyberpunk.jpg';
import assassin from '../../media/assassin.jpg';
import dota from '../../media/dota-small.jpg';
import cod4 from '../../media/cod4.jpg';
import minecraft from '../../media/minecraft.jpg';
import farcry5 from '../../media/farcry5.jpg';
import './_Offer.scss';
import useGameDB from "../../config/useGameDB";
import Loading from "../Loading/Loading";
import OfferLikeButton from "./OfferLikeButton";

const SMALL_GAME_COVER = [cyberpunk, assassin, dota, cod4, minecraft, farcry5];

const Offer: React.FC = () => {
  const { gameDetails } = useGameDB();

  if (gameDetails.length === 0) {
    return <Loading />;
  }

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="offer">
            <div className="textarea">
              <h3 className="textarea__heading">Special Offers</h3>
            </div>

            <div className="offer__games">
              {SMALL_GAME_COVER.map((_, index) => (
                <section className="offer__gameBlock" key={index}>
                  <div className="offer__image-section">
                    <img
                      src={SMALL_GAME_COVER[index]}
                      alt="game"
                      className="offer__image"
                      draggable="false"
                    />
                    <OfferLikeButton gameId={gameDetails[index].title} />
                  </div>
                  <div className="offer__image-textarea">
                    <h4 className="offer__heading">{gameDetails[index].title}</h4>
                    <p className="offer__pricing">
                      <span className="offer__savings">
                        {Math.round(Number(gameDetails[index].savings))}%{" "}
                      </span>
                      <span className="offer__new-price">
                        <span className="offer__old-price">
                          {gameDetails[index]?.normalPrice || "0"}$
                        </span>
                        {gameDetails[index]?.salePrice || "0"}$ 
                      </span>
                    </p>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
