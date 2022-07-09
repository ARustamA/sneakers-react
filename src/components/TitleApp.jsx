import styles from './../app.module.scss';

function Title({searchValue, onClear, searchItem}) {
   return (
      <div className={styles.content__title}>

         <h1>{searchValue ? `Поиск по запросу: "${searchValue}" ` : "Все кроссовки"}</h1>
         <div className={styles.search}>

            <img width={17} height={17} src="/sneakers-react/img/search.svg" alt="search" />

            {searchValue && <img onClick={onClear} className={styles.clear}
               src="/sneakers-react/img/btn-delete.svg" alt="clear" />}

            <input onChange={searchItem} value={searchValue} placeholder='Поиск...' />

         </div>
      </div>

   )
}

export default Title