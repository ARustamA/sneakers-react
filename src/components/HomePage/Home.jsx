import styles from './style.module.scss';
import Card from './../Card/Index'
import Title from '../TitleApp';

function Home({   items,
                  searchValue,
                  onClear,
                  searchItem,
                  addItemToCard,
                  addItemToFavorite,
                  deleteItemToCard 
               }) {
   return (
      <div className={styles.content}>
         <Title searchValue={searchValue}
            onClear={onClear}
            searchItem={searchItem} />
         <div className={styles.content__body}>
            {items.filter(obj => obj.name.toLowerCase()
               .includes(searchValue.toLowerCase()))
               .map((obj) => (
                  <Card
                     name={obj.name}
                     price={obj.price}
                     url={obj.imgUrl}
                     id={obj.id}
                     key={obj.id}
                     onAddToFavorite={(item) => addItemToFavorite(item)}
                     onAddToCard={(item) => addItemToCard(item)}
                     deleteItem={(item) => deleteItemToCard(item)} />
               ))}
         </div>
      </div>

   )
}

export default Home