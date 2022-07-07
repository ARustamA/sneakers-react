import styles from './Drawer.module.scss';
import React from 'react'
import AppContext from '../../context'

const DrawerItems = ({ items }) => {

   const { deleteItemToCard } = React.useContext(AppContext)

   return (
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

   )
}
export default DrawerItems