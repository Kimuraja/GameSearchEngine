import { Link } from 'react-router-dom';
import Download from '../../media/download.svg';

const NavLinks = () => {
  return (
    <>
      <li><Link className='nav__link' to="/">Discover</Link></li>
      <li><Link className='nav__link'to="/">Explore</Link></li>
      <li><Link className='nav__link'to="/">Support</Link></li>
      <li><a className='nav__link' id='download'><img src={Download} alt="download-btn" id='download-btn'/> Download</a></li>
    </>
  )
}

export default NavLinks