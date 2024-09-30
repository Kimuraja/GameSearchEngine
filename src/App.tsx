import './App.css';
import Navbar from './components/Navbar/Navbar';
import useGameDB from './config/useGameDB';
import Loading from "./components/Loading/Loading"
import Offer from './components/Offer/Offer';
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';
import Deals from './components/Deals/Deals';

function App() {
  const { BaseContent } = useGameDB();


  if (BaseContent.length === 0) {
    return <Loading />
  } else {
    return (
      <>
        <Navbar />
        <Deals />
        <Offer />
        <Category />
        <Footer />
      </>
    )
  }

}

export default App;
