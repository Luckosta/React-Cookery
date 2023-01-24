function Footer() {
   return (
      <footer className='page-footer blue'>
         <div className='footer-copyright'>
            <div className='container'>
               © {new Date().getFullYear()} Copyright Text
               <a
                  target='_blank'
                  className='grey-text text-lighten-4 right'
                  href='https://github.com/Luckosta/React-Cookery'
                  rel='noreferrer'
               >
                  GitHub
               </a>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
