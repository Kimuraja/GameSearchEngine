import React from 'react';
import useGameDB from '../../config/useGameDB';
import './_gameArray.scss';
import { Link } from 'react-router-dom';

const GameArray: React.FC = () => {
  const { filterGame, handleSearchChange, searchQuery } = useGameDB()

  return (
    <section className='games col-4'>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
        className='form-control games__input'
      />
      
      {searchQuery && (
        <ul className='games__list'>
          {filterGame.length <= 0 ? (
            <p>No games found</p>
          ) : (
            filterGame.map((game, index) => (
              <Link to={`/selected-game/${game.gameID}`} className='games__link' key={index} >
                <li title={game.title} className='games__content'>
                  <img src={game.thumb} alt={game.title} draggable='false'/>
                  <span className="game-info">
                    <span>{game.title}</span>
                    <span>{game.salePrice}$ <span className='game-nomralPrice'>{game.normalPrice}$</span></span>
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

export default GameArray ;
