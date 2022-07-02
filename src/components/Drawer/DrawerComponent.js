import styles from './Drawer.module.scss';
let sumPrice=0
function Drawer({onClose, items =[]}) {
   return (
      <div className={styles.overlay}>
         <div className={styles.drawer}>

            <h2>
               Корзина <img onClick={onClose} className={styles.cart__item_remove} src="/img/btn-remove.svg" alt="remove" />
            </h2>


            <div className={styles.items}>
               
               {
               items.map((obj) => (
                  
                  <div className={styles.cart__item}>
                     <img width={100} height={100} src={obj.url} alt="sneakers" />
                     <div className={styles.cart__item_text}>
                        <p>{obj.name}</p>
                        <b>{obj.price} руб.</b>
                     </div>
                     {sumPrice = sumPrice + obj.price}
                     <img className={styles.cart__item_remove} src="/img/btn-remove.svg" alt="remove" />
                  </div> 
               ))}
                  

            </div>
            <div className={styles.drawer__bottom}>
               <ul>
                  <li className={styles.drawer__bottom_li}>
                     <span> Итого: </span>
                     <div className={styles.drawer__bottom_line}></div>
                     <b>{sumPrice} руб. </b>
                  </li>
                  <li className={styles.drawer__bottom_li}>
                     <span>Налог 10%: </span>
                     <div className={styles.drawer__bottom_line}></div>
                     <b>{Number((sumPrice /100 * 10).toFixed(2))} руб. </b>
                  </li>
               </ul>
            </div>
            <button href="#" className={styles.button}>
               <p>Оформить заказ</p>
               <img width={20} height={20} src="/img/pointer-right.svg" alt="pointer" />
            </button>
         </div>
      </div>
   )
}

export default Drawer