import './_gameInfo.scss'
import { useGameCover } from '../../config/useGameCover';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Recommendation from './Recommendation';
import SmallGameHover from './SmallGameHover';

const GameInfo: React.FC = () => {
  const { GAME_COVER } = useGameCover()

  return (
    <section className='container-fluid'>
      <div className="row">
        <div className="col-12">
          <div className="info">
            <div className="textarea">
              <h3 className="textarea__heading">Featured & Recommended</h3>
              <p className='textarea__arrows'><span id='arrow-left'><IoIosArrowBack /></span><span id='arrow-right'><IoIosArrowForward/></span></p>
            </div>

            <div className='row info__games'>
              <div className="col-6 info__left">
                <Recommendation index={10}/>
                <img src={GAME_COVER[0]} alt="big" className='big-img' draggable='false'/>
              </div>
              
              <div className="col-6 info__right">
                <div className="row small-img-container-up">
                  <div className="col-8">
                    <SmallGameHover index={10}/>
                    <img src={GAME_COVER[1]} alt="small" className='small-img' draggable="false"/>
                  </div>
                  <div className="col-4">
                    <SmallGameHover index={11}/>
                    <img src={GAME_COVER[2]} alt="small" className='small-img' draggable="false"/>
                  </div>
                </div>
                <div className="row small-img-container-down">
                  <div className="col-4">
                    <SmallGameHover index={12}/>

                    <img src={GAME_COVER[3]} alt="small" className='small-img' draggable="false"/>
                  </div>
                  <div className="col-8">
                    <SmallGameHover index={13}/>
                    <img src={GAME_COVER[4]} alt="small" className='small-img' draggable="false"/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default GameInfo;
