import classNames from 'classnames';
import styles from './Search.module.css';
function Search({ cb = Function.prototype, value, setValue }) {
   const handleSubmit = () => {
      cb(value);
   };

   const handleKey = (e) => {
      if (e.key === 'Enter') {
         handleSubmit();
      }
   };

   return (
      <div className='row'>
         <div className='input-field col s12'>
            <input
               type='search'
               id='search-field'
               placeholder='Search'
               onKeyDown={handleKey}
               onChange={(e) => setValue(e.target.value)}
               value={value}
            />
            <button
               className={classNames(styles.btn, 'btn')}
               onClick={handleSubmit}
            >
               Search
            </button>
         </div>
      </div>
   );
}

export default Search;
