import React from 'react'
import './_Category.scss';
import rpg from '../../media/4story.png';
import horror from '../../media/horror.png';
import action from '../../media/gta.png';
import sport from '../../media/fifa.png';
import adventure from '../../media/Uncharted.png';
import CategoryOverlay from './CategoryOverlay';

const CategoryList = {
  title: ['Horror','Adventure','Sport','Action','RPG'],
  category: [horror, adventure, sport, action, rpg]
}

const Category: React.FC = () => {
  return (
    <section className="container-fluid category-section">
      <div className="row">
        <div className="col-12">
          <div className="category">
            <div className="textarea">
              <h3 className="textarea__heading">Explore Categories</h3>
            </div>

            <div className="category__games">
              {CategoryList.title.map((key, index) => (
                <section className="category__gameCategory" key={key}>
                  <div className="category__section">
                    <CategoryOverlay title={CategoryList.title[index]}/>
                    <img src={CategoryList.category[index]} alt='category' className='category__image' draggable='false' />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category