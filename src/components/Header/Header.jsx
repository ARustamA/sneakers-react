import styles from '../Header/style.module.scss';
import {  Link } from 'react-router-dom';
import React from 'react'
import AppContext from '../../context'

function Header({onClickCard}) {
   const{ cartItems} = React.useContext(AppContext)

   const cartSum = cartItems.reduce((sum, obj)=>sum+obj.price, 0)

   return (
      <header >
         <Link to='/'>
            <div className={styles.header__left}>
               <img width={40} height={40} src="sneakers-react/img/logo.png" alt="logo" />
               <div className={styles.header__info}>
                  <h3>REACT SNEAKERS</h3>
                  <p>Магазин лучших кроссовок</p>
               </div>
            </div>
         </Link>

         <ul className={styles.header__right}>
            <li onClick={onClickCard} className={styles.margin__li}>
               <Link to='/'>
                  <img src="sneakers-react/img/cart.svg" alt="cart" className={styles.button__cart}/>
                  <span> {cartSum} руб.</span>
               </Link>
               </li>
            <li >
               <Link to='favorites'>
                  <img src="sneakers-react/img/heart.svg" alt="heart" className={styles.button__heart}/>
               </Link>
            </li>
            <li>
               <Link to='orders'>
                  <img width={20} height={20} src="sneakers-react/img/user.svg" alt="user" 
                     className={styles.button__user}/>
               </Link>
            </li>
         </ul>
      </header>
   )
}

export default Header