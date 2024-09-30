import React from 'react';
import useGameDB from '../../config/useGameDB';
import './_gameList.scss';
import { Link } from 'react-router-dom';

const GameList: React.FC = () => {
  const { filterGame, ContentData, searchContentData } = useGameDB()


  return (
    <section className='games col-4'>
      <input
        type="text"
        value={searchContentData}
        placeholder="Search..."
        onChange={ContentData}
        className='form-control games__input'
      />
      
      {searchContentData && (
        <ul className='games__list'>
          {filterGame.length <= 0 ? (
            <p>No games found</p>
          ) : (
            filterGame.map((deal, index) => (
              <Link to={`/SelectedGame/${deal.dealID}`} className='games__link'>
                <li key={index} title={deal.title} className='games__content'>
                  <img src={deal.thumb} alt={deal.title} draggable='false'/>
                  <span className="game-info">
                    <span>{deal.title}</span>
                    <span>{deal.salePrice}$ <span className='game-nomralPrice'>{deal.normalPrice}$</span></span>
                  </span>
                </li>
              </Link>

          ))
        )}
      </ul>
      )}
    </section>

  );
}

export default GameList ;
