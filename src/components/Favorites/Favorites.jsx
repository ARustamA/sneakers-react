import { Link } from 'react-router-dom';
import styles from '../Favorites/style.module.scss';
import Card from './../Card/Index'
import AppContext from '../../context'
import React from 'react';


function Favorites({ addItemToCard, addItemToFavorite}) {

   const {favorites} = React.useContext(AppContext)

   return (
      <div className={styles.favorites}>
         <h1>Мои избранные</h1>
         
         { (favorites.length===0)
            ?<>
            <div className={styles.sadImg}>
               <h2>Извините, Вы ничего не добавили!</h2>
               <img width={90} height={90} src="../img/image 9.png" alt="sadSmile" />
            </div>
            
            <span>
               Пожалуйста перейдите к <Link to="/"><b> КРОССОВКАМ </b></Link> и отметьте понравившиеся вам товары, чтобы не потерять их.
            </span>
            </>
            :  <div className={styles.card}>
               {favorites.map((obj) => (
                     <Card
                        name={obj.name}
                        price={obj.price}
                        url={obj.imgUrl}
                        id={obj.id}
                        key={obj.id}
                        isFavorite={true}
                        onAddToFavorite={addItemToFavorite}
                        addItemToCard={addItemToCard}
                        />
               ))}
               </div>
      
         }
            
         
         
      </div>

   )
}

export default Favorites