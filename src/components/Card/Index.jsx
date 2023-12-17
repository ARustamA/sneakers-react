import React from 'react';
import ContentLoader from "react-content-loader";
import { ReactComponent as Check } from '../../assets/img/check.svg';
import { ReactComponent as Cross } from '../../assets/img/cross.svg';
import { ReactComponent as Heart } from '../../assets/img/heart.svg';
import { ReactComponent as LikeHeart } from '../../assets/img/like-heart.svg';
import AppContext from '../../context';
import styles from './Card.module.scss';

function Card({ url, name, price, id, onAddToFavorite, onAddToCard,
   isFavorite = false, loading }) {
   const [isLike, setIsLike] = React.useState(isFavorite);
   const { isItemAddedCart } = React.useContext(AppContext);
   const item = { url, parentId: id, name, price, id };

   const onClickPlus = () => {
      onAddToCard(item);
   };
   const onClickHeart = () => {
      setIsLike(!isLike);
      onAddToFavorite(item);
   };
   return (
      <div className={styles.sneakers} >
         {loading ? (
            <ContentLoader
               speed={2}
               width={155}
               height={250}
               viewBox="0 0 155 265"
               backgroundColor="#f3f3f3"
               foregroundColor="#e3f3f3"  >
               <rect x="1" y="0" rx="10" ry="10" width={155} height={155} />

               <rect x="0" y="167" rx="5" ry="5" width={155} height={15} />

               <rect x="0" y="187" rx="5" ry="5" width={100} height={15} />

               <rect x="1" y="234" rx="5" ry="5" width={80} height={25} />

               <rect x="124" y="230" rx="10" ry="10" width={32} height={32} />
            </ContentLoader>
         ) : (<>
            {onAddToFavorite &&
               <button className={styles.button_like} onClick={onClickHeart}>
                  {isLike ? <LikeHeart /> : <Heart />}
               </button>}
            <img src={url} width="100%" height={130} alt={name} />
            <h5>{name}</h5>
            <div className={styles.sneakers__bottom}>
               <div className={styles.bottom__title}>
                  <span>ЦЕНА: </span>
                  <b>{price} руб.</b>
               </div>
               <>{onAddToCard &&
                  <button className={styles.button_choice} onClick={onClickPlus}>

                     {isItemAddedCart(id) ? <Check /> : <Cross />}

                  </button>}</>
            </div>
         </>)}
      </div>
   );
}

export default Card;
