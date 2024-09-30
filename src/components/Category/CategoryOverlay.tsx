import { BsArrowRightCircleFill } from 'react-icons/bs'
import './_CategoriesOverlay.scss'

type T = {
  title: string
}

const CategoryOverlay = ({ title }:T) => {
  return (
    <section className="overlay">
      <div className="overlay__textarea">
        <p className='overlay__text'>Popularity</p>
        <h2 className="overlay__heading">{title}</h2>
      </div>
        <button className="overlay__button"><BsArrowRightCircleFill className='overlay__arrow'/></button>
    </section>
  )
}

export default CategoryOverlay