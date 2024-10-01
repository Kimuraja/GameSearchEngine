import Slider from '../Slider/Slider'
import './_Main.scss'
import witcher from '../../media/witcher.png'
import tsushima from '../../media/tsushima.jpg'
import farcry6 from '../../media/farcry6.jpg'
import coh3 from '../../media/coh3.jpg'
import Offer from '../Offer/Offer'
import Deals from '../Deals/Deals'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'

const IMAGES = [farcry6, coh3, witcher, tsushima];

const Main = () => {
  return (
    <section className="container-fluid main">
      <div className="row">
        <div className="components">
        <header className="col-12 components__header">
          <Slider imageUrls={IMAGES}/>
        </header>
          <Deals />
          <Offer />
          <Category />
          <Footer />
        </div>
      </div>
    </section>
  )
}

export default Main