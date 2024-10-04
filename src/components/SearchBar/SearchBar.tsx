import React, { useState, useRef, useEffect } from 'react';
import useGameDB from '../../config/useGameDB';
import './_SearchBar.scss';
import { Link } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const { handleSearch, inputSearchDeal } = useGameDB();
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node) &&
        listRef.current &&
        !listRef.current.contains(event.target as Node)
      ) {
        setIsListVisible(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputFocus = () => {
    setIsListVisible(true);
  };

  return (
    <section className='games col-4'>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        onFocus={handleInputFocus}
        ref={searchInputRef}
        className='form-control games__input'
      />

      {isListVisible && inputSearchDeal && (
        <ul className='games__list' ref={listRef}>
          {inputSearchDeal.length <= 0 ? (
            <p>No games found</p>
          ) : (
            inputSearchDeal.map((game, index) => (
              <Link to={`/selected-game/${game.gameID}`} className='games__link' key={index} >
                <li title={game.title} className='games__content'>
                  <img src={game.thumb} alt={game.title} draggable='false' className='games__image'/>
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

export default SearchBar;
