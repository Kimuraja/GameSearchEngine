import './App.css';
import Navbar from './components/Navbar/Navbar';
import useGameDB from './config/useGameDB';
import Loading from "./components/Loading/Loading"

function App() {
  const { gameDetails } = useGameDB();


  if (gameDetails.length === 0) {
    return <Loading />
  } else {
    return (
      <>
        <Navbar />
      </>
    )
  }

}

export default App;
