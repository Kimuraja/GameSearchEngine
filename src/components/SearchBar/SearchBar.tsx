import React, { useState, useRef, useEffect } from "react";
import useGameDB from "../../config/useGameDB";
import "./_SearchBar.scss";
import { Link } from "react-router-dom";

const SearchBar: React.FC = () => {
  const { handleSearch, inputSearchDeals } = useGameDB();
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const [searchTimeout, setSearchTimeout] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const inputListRef = useRef<HTMLUListElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node) &&
        inputListRef.current &&
        !inputListRef.current.contains(event.target as Node)
      ) {
        setIsListVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputSearchDeals.length === 0) {
        setSearchTimeout(true);
      }
    }, 5000);
    if (inputSearchDeals.length > 0) {
      setSearchTimeout(false);
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [inputSearchDeals]);

  const handleInputFocus = () => {
    setIsListVisible(true);
    setSearchTimeout(false);
  };


  return (
    <section className="games col-4">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        onKeyDown={handleInputFocus}
        ref={searchInputRef}
        className="form-control games__input"
      />

      {isListVisible && (
        <ul className="games__list" ref={inputListRef}>
          {inputSearchDeals && inputSearchDeals.length > 0 ? (
            inputSearchDeals.map((game, index) => (
              <li key={index} className="games__content">
                <Link to={`/selected-game/${game.gameID}`}>
                  <img
                    src={game.thumb}
                    alt={game.internalName}
                    draggable="false"
                    className="games__image"
                  />
                </Link>
                <span className="game-info">
                  <span>{game.external}</span>
                  <span>{game.cheapest} $</span>
                  <a
                    href={`https://www.cheapshark.com/redirect?dealID=${game.cheapestDealID}`}
                    className="games__link"
                    target="_blank"
                  >
                    Go to Deal
                  </a>
                </span>
              </li>
            ))
          ) : searchTimeout ? (
            <p>No game data found</p>
          ) : (
            <p>Searching for games...</p>
          )}
        </ul>
      )}
    </section>
  );
};

export default SearchBar;
