import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import NavLinks from './NavLinks';
import './_Navbar.scss';
import GameList from '../GameList/GameList';
import SelectedGame from '../SelectedGame/SelectedGame';

const Navbar = () => {
  return (
    <section className='container-fluid'>
      <nav className='row'>
        <ul className='nav col-12'>
          {<GameList />}
          <NavLinks/>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/SelectedGame/:dealID' element={<SelectedGame />}/>
      </Routes>
    </section>
  )
}

export default Navbar