import React from 'react'
import axios from "axios";

import CardBottom from './CardBottom';
import Info from "../info";

import AppContext from '../../context'
import styles from './Drawer.module.scss';

function Drawer({ onClose, items = [], open}) {
   const { cartItems, setCartItems, deleteItemToCard } = React.useContext(AppContext)
   const [isPaid, setIsPaid] = React.useState(false)
   const [isLoading, setIsLoading] = React.useState(false)
   const [orderId, setOrderId] = React.useState(null)
   const cartSum = cartItems.reduce((sum, obj) => sum + obj.price, 0)

   const onClickOrder = async () => {
      try {
         setIsLoading(true)
         const { data } = await axios.post('https://62b2813420cad3685c8edbad.mockapi.io/orders',
            { items: cartItems })
         setOrderId(data.id)
         setIsPaid(true)
         setCartItems([])
      } catch (error) { alert('Не удалось создать заказ!')
         console.error(error) }
      setIsLoading(false)
   }
   return (
      <div className={styles.overlay}>
         {/* {`${styles.overlay}${open ? styles.overlayVisible : ''}`}> */}
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

                              <img onClick={() => deleteItemToCard(obj.id)} className={styles.cart__item_remove} src="/img/btn-remove.svg" alt="remove" />
                           </div>
                        ))
                        }
                     </>
                     <div className={styles.but}>
                        <button onClick={onClose} className={styles.button}>
                           <p>Вернуться к покупкам</p>

                        </button>
                     </div>
                     <CardBottom cartSum={cartSum} onClickOrder={onClickOrder} isLoading={isLoading} />
                  </div>
                  :
                  <Info
                     name={isPaid ? 'Заказ оформлен!' : 'Корзина пустая'}
                     image={isPaid ? "/img/image 8.jpg" : "/img/card.png"}
                     description={isPaid
                        ? `Ваш заказ №${orderId} скоро будет передан курьерской доставке`
                        : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                     buttonName='Вернуться к покупкам' />
            }
         </div>
      </div>
   )
}

export default Drawer

