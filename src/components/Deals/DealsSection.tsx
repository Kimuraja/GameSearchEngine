import useGameDB from '../../config/useGameDB'
import { Link } from 'react-router-dom'
import useSelectedGame from '../../config/useSelectedGame';

const DealsSection = () => {
  const { filterGamesList } = useGameDB()
  const { fetchGameDataByGameID } = useSelectedGame()

  return (
    <>
      {filterGamesList.length <= 0 ? (
        <p className='deals__loading'>Loading...</p>
      ) : (
        filterGamesList.slice(0, 10).map((deal, index) => (
          <li className='deals__list' key={index} onClick={() => fetchGameDataByGameID(`${deal.gameID}`)}>
            <Link to={`/selected-game/${deal.gameID}`} className='deals__link'>
              <div className="deals__heading">
                <img src={deal.thumb} alt="deals__image" className='deals__image' />
                <h4 className="deals__title">{deal.title}</h4>
              </div>
              <div className='deals__price'>
                <span className='deals__discount'>{`-${Math.round(Number(deal.savings))}%`}</span>
                <span className='deals__sale-price'>{`${deal.salePrice}$ `}<span className='deals__normal-price'>{`${deal.normalPrice}$`}</span></span>
              </div>
            </Link>
          </li>
        ))
      )}
    </>
  )
}

export default DealsSection