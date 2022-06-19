import styles from './Drawer.module.scss';

function Drawer() {
   return (
      <div className={styles.overlay}>
         <div className={styles.drawer}>

            <h2>
               Корзина <img className={styles.cart__item_remove} src="/img/btn-remove.svg" alt="remove" />
            </h2>


            <div className={styles.items}>

               <div className={styles.cart__item}>
                  <img width={65} height={65} src="/img/sneakers/1.jpg" alt="Blazer Mid Suede" />
                  <div className={styles.cart__item_text}>
                     <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                     <b>12 999 руб.</b>
                  </div>

                  <img className={styles.cart__item_remove} src="/img/btn-remove.svg" alt="remove" />
               </div>

               <div className={styles.cart__item}>
                  <img width={65} height={65} src="/img/sneakers/1.jpg" alt="Blazer Mid Suede" />
                  <div className={styles.cart__item_text}>
                     <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                     <b>12 999 руб.</b>
                  </div>

                  <img className={styles.cart__item_remove} src="/img/btn-remove.svg" alt="remove" />
               </div>

            </div>
            <div className={styles.drawer__bottom}>
               <ul>
                  <li className={styles.drawer__bottom_li}>
                     <span>Итого: </span>
                     <div className={styles.drawer__bottom_line}></div>
                     <b>21498 руб. </b>
                  </li>
                  <li className={styles.drawer__bottom_li}>
                     <span>Налог 5%: </span>
                     <div className={styles.drawer__bottom_line}></div>
                     <b>1074 руб. </b>
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