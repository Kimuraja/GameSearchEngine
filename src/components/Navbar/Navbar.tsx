import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import NavLinks from './NavLinks';
import './_Navbar.scss';
import GameArray from '../GameList/GameArray';
import SelectedGame from '../SelectedGame/SelectedGame';

const Navbar = () => {
  return (
    <section className='container-fluid'>
      <nav className='row'>
        <ul className='nav col-12'>
          {<GameArray />}
          <NavLinks/>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/selected-game/:gameID' element={<SelectedGame />}/>
      </Routes>
    </section>
  )
}

export default Navbar