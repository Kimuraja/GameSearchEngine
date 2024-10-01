import useGameDB from '../../config/useGameDB'
import { Link } from 'react-router-dom'
import useChosenStore from '../../config/useChosenStore';

type Slice = {
  start: number;
  end: number;
}

const DealList = ({start, end}:Slice) => {
  const { filterGame } = useGameDB()
  const { getID } = useChosenStore()

  return (
    <>
      {filterGame.map((deal, index) => (
        <li className='deals__list' key={index} onClick={() => getID(`${deal.gameID}`)}>
          <Link to={`/SelectedGame/${deal.gameID}`} className='deals__link'>
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
      )).slice(start, end)}
    </>
  )
}

export default DealList