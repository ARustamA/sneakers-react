import CardBottom from './CardBottom';
import styles from './Drawer.module.scss';
import Info from "../info";
import React from 'react'
import AppContext from '../../context'


let sumPrice = 0
function Drawer({ onClose, deleteItem, items = [] }) {
   const { setCartItems } = React.useContext(AppContext)
   const [isPaid, setIsPaid] = React.useState(false)

   const onClickOrder = () => {
      setIsPaid(!isPaid)
      setCartItems([])
   }

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
                        {items.map((obj) => (

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
                     <div className={styles.but}>
                        <button onClick={onClose} className={styles.button}>
                           <p>Вернуться к покупкам</p>

                        </button>
                     </div>
                     <CardBottom sumPrice={sumPrice} onClickOrder={onClickOrder} />
                  </div>

                  : 
                  <Info
                     name={isPaid  ? 'Заказ оформлен!' : 'Корзина пустая'}
                     image={isPaid ? "/img/image 8.jpg" : "/img/card.png"}
                     description={isPaid ? `Ваш заказ 123 скоро будет передан курьерской доставке` :
                        'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                     }
                     buttonName='Вернуться к покупкам' />

            }

         </div>

      </div>
   )
}

export default Drawer