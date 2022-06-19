import styles from './Card.module.scss';

function Card  (props) {

   const onClickButton = ()=> {

   }

   return (
      <div className={styles.sneakers} >

         {
            props.favorite 
            ?  <div className={styles.favorite}>
                  <button onClick={onClickButton} className={styles.button_cross}>
                     <img width={15} height={15} src="/img/like-heart.svg" alt="heart" />
                  </button>
               </div>
            : <div className={styles.unfavorite}></div>
         }
         
         <img width={133} height={112} src={props.url} alt={props.name} />
         <h5>{props.name}</h5>
         <div className={styles.sneakers__bottom}>
            <div className={styles.bottom__title}>
               <span>ЦЕНА: </span>
               <b>{props.price} руб.</b>
            </div>
            {
               props.choice 
               ?  <button href="#" className={styles.button_choice}>
                     <img width={13} height={13} src="/img/check.svg" alt="check" />
                  </button>
               :  <button href="#" className={styles.button_cross}>
                     <img width={13} height={13} src="/img/cross.svg" alt="cross" />
                  </button>
            }
            
         </div>
      </div>
   
   );
}

export default Card;
