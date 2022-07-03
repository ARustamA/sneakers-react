import React from 'react';
import styles from './Card.module.scss';

function Card({ favorite, url, name, price, id, onAddToFavorite, onAddToCard, deleteItem}) {

   const [isAdded, setIsAdded] = React.useState(false);
   const [isLike, setIsLike] = React.useState(false);

   const onClickPlus = () => {
      setIsAdded(!isAdded)
      
      onAddToCard({url, name, price, id})
      // deleteItem()
      
   }

   const onClickHeart = () => {
      setIsLike(!isLike)
      onAddToFavorite({url, name, price, id})
   
   }

   return (
      <div className={styles.sneakers} >
         <button className={styles.button_like} onClick={onClickHeart}>
            {
               <img width={20} height={20} alt="choice" src=
                  {
                     isLike ? "/img/like-heart.svg" : "/img/heart.svg"
                  } />
            }

         </button>

         <img width={133} height={112} src={url} alt={name} />
         <h5>{name}</h5>
         <div className={styles.sneakers__bottom}>
            <div className={styles.bottom__title}>
               <span>ЦЕНА: </span>
               <b>{price} руб.</b>
            </div>

            <div >
               <button className={styles.button_choice} onClick={onClickPlus}>
                  <img width={17} height={17} alt="choice" src=
                     {
                        isAdded ? "/img/check.svg" : "/img/cross.svg"
                     } />
               </button>

            </div>

         </div>
      </div>

   );
}

export default Card;
