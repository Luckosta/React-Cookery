import classNames from 'classnames';
import styles from './Header.module.css';

function Header() {
   return (
      <nav className='blue'>
         <div className='nav-wrapper '>
            <a
               href='https://github.com/Luckosta/React-Cookery'
               className={classNames(styles.logo, 'brand-logo center')}
               target='_blank'
               rel='noreferrer'
            >
               React-Cookery
            </a>
         </div>
      </nav>
   );
}

export default Header;
