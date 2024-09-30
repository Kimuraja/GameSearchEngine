import Slider from '../Slider/Slider'
import './_Main.scss'
import witcher from '../../media/witcher.png'
import tsushima from '../../media/tsushima.jpg'
import farcry6 from '../../media/farcry6.jpg'
import coh3 from '../../media/coh3.jpg'

const IMAGES = [farcry6, coh3, witcher, tsushima];

const Main = () => {
  return (
    <section className="container-fluid main">
      <div className="row">
        <header className="col-12 main__header">
          <Slider imageUrls={IMAGES}/>
        </header>
      </div>
    </section>
  )
}

export default Main