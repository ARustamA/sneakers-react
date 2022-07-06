import CardBottom from './CardBottom';
import styles from './Drawer.module.scss';
let sumPrice=0
function Drawer({ onClose, deleteItem, items = [] }) {
   return (
      <div className={styles.overlay}>
         <div className={styles.drawer}>

            <h2>
               Корзина 
                  <img onClick={onClose} className={styles.cart__item_remove}
                  src="/img/btn-remove.svg" alt="remove" />
            </h2>

            {
               items.length > 0 
               ? 
               <div className={styles.items}>
                  <>
                  {  items.map((obj) => (

                        <div key={obj.id} className={styles.cart__item}>
                           <img width={70} height={70} src={obj.url} alt="sneakers" />
                           <div className={styles.cart__item_text}>
                              <p>{obj.name}</p>
                              <b>{obj.price} руб.</b>
                           </div>
                           {/* {obj.id ?  (sumPrice = sumPrice + obj.price) : sumPrice=0} */}

                           <img onClick={() => deleteItem(obj.id)} className={styles.cart__item_remove} src="/img/btn-remove.svg" alt="remove" />
                        </div>
                     ))
                  }
               </>

               <CardBottom sumPrice={sumPrice} />
               </div> 
               : 
               <div className={styles.cardClean}>
               <img  width={170} height={170} src="/img/card.png" alt="card" />
               <h3>Корзина пустая</h3>
               <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
               <div>
                  <button className={styles.button} onClick={onClose}>
                  <img width={20} height={20} src="/img/pointer-left.svg" alt="pointer" />
                     <p>Вернуться к покупкам</p> 
                  </button>
               </div>
               </div>
            }

            

         </div>
      </div>
   )
}

export default Drawer