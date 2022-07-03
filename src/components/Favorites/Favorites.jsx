import styles from '../Favorites/style.module.scss';
import Card from './../Card/Index'

function Favorites({ items, addItemToFavorite}) {


   return (
      <div className={styles.favorites}>
         <h1>Мои закладки</h1>
         <div className={styles.card}>
            {items.map((obj) => (
                  <Card
                     name={obj.name}
                     price={obj.price}
                     url={obj.imgUrl}
                     id={obj.id}
                     key={obj.id}
                     isFavorite={true}
                     onAddToFavorite={addItemToFavorite}
                     />
               ))}
         </div>
         
      
      </div>

   )
}

export default Favorites