import styles from './../app.module.scss';
import { ReactComponent as Search } from './../assets/img/search.svg';
import { ReactComponent as Delete } from './../assets/img/btn-delete.svg';

function Title({ searchValue, onClear, searchItem }) {
   return (
      <div className={styles.content__title}>

         <h1>{searchValue ? `Поиск по запросу: "${searchValue}" ` : "Все кроссовки"}</h1>
         <div className={styles.search}>

            <Search />
            {searchValue &&
               <button onClick={onClear}>

                  <Delete className={styles.clear} />
               </button>
            }
            <input onChange={searchItem} value={searchValue} placeholder="Поиск..." />

         </div>
      </div>

   );
}

export default Title;