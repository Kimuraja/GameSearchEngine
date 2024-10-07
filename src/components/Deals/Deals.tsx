import './_deals.scss'
import DealsSection from '../Deals/DealsSection'

const Deals = () => {

  return (
    <section className='container-fluid'>
      <div className="row">
        <div className="col-12">
          <div className="deals">
            <div className="col-6 deals__list-content">
              <ul className='deals__u-list'>
                <DealsSection/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deals