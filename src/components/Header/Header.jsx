import styles from '../Header/style.module.scss';
import {  Link } from 'react-router-dom';

function Header({onClickCard}) {
   return (
      <header >
         <Link to='#'>
            <div className={styles.header__left}>
               <img width={40} height={40} src="/img/logo.png" alt="logo" />
               <div className={styles.header__info}>
                  <h3>REACT SNEAKERS</h3>
                  <p>Магазин лучших кроссовок</p>
               </div>
            </div>
         </Link>

         <ul className={styles.header__right}>
            <li onClick={onClickCard} className={styles.margin__li}>
               <Link to='#'>
                  <img src="/img/cart.svg" alt="cart" className={styles.button__cart}/>
                  <span> 1205 руб.</span>
               </Link>
               </li>
            <li >
               <Link to="/favorites">
                  <img src="/img/heart.svg" alt="heart" className={styles.button__heart}/>
               </Link>
            </li>
            <li>
               <Link to='#'>
                  <img width={20} height={20} src="/img/user.svg" alt="user" 
                     className={styles.button__user}/>
               </Link>
            </li>
         </ul>
      </header>
   )
}

export default Header