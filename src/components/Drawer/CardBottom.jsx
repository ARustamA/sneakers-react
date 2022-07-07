import styles from './Drawer.module.scss';

function CardBottom(props) {
   return (
      
         <div className={styles.drawer__bottom}>
               <ul>
                  <li className={styles.drawer__bottom_li}>
                     <span> Итого: </span>
                     <div className={styles.drawer__bottom_line}></div>
                     <b>{props.sumPrice} руб. </b>
                  </li>
                  <li className={styles.drawer__bottom_li}>
                     <span>Налог 10%: </span>
                     <div className={styles.drawer__bottom_line}></div>
                     <b>{Number((props.sumPrice /100 * 10).toFixed(2))} руб. </b>
                  </li>
               </ul>
               <button onClick={props.onClickOrder}  className={styles.button}>
               <p>Оформить заказ</p>
               <img className={styles.but_img}width={20} height={20} src="/img/pointer-right.svg" alt="pointer" />
            </button>
         </div>
            
      
      
   )
}

export default CardBottom