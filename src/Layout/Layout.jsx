import styles from './Layout.module.css';
import cn from 'classnames';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
   return (
      <>
         <Header />
         <div className={cn(styles.content, 'container content')}>
            <Outlet />
         </div>
         <Footer />
      </>
   );
}

export default Layout;
