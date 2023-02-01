import classNames from 'classnames';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
function Header() {
   return (
      <nav className='blue'>
         <div className='nav-wrapper '>
            <Link to='/' className={classNames(styles.logo, 'brand-logo ')}>
               React-Cookery
            </Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
               <li>
                  <Link to='/about'>About</Link>
               </li>
               <li>
                  <Link to='/contact'>Contact</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default Header;
