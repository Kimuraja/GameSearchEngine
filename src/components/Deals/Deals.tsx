import './_deals.scss'
import DealList from './DealList'

const Deals = () => {

  return (
    <section className='container-fluid'>
      <div className="row">
        <div className="col-12">
          <div className="deals">
            <div className="col-6 deals__list-content">
              <ul className='deals__u-list'>
                <DealList start={0} end={5}/>
              </ul>
            </div>
            <div className="col-6 deals__list-content">
            <ul className='deals__u-list'>
              <DealList start={6} end={11}/>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deals