import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
   return (
      <>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<Home />} />
               <Route path='about' element={<About />} />
               <Route path='contact' element={<Contact />} />
               <Route path='*' element={<NotFound />} />
            </Route>
         </Routes>
      </>
)}

export default App;