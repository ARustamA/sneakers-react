import styles from './../app.module.scss';

function Header(props) {
   return (
      <header >
         <div className={styles.header__left}>
            <img width={40} height={40} src="/img/logo.png" alt="logo" />
            <div className={styles.header__info}>
               <h3>REACT SNEAKERS</h3>
               <p>Магазин лучших кроссовок</p>
            </div>
         </div>

         <ul className={styles.header__right}>
            <li onClick={props.onClickCard} className={styles.margin__li}>
               <a href="#" className={styles.button__cart}>
                  <img src="/img/cart.svg" alt="cart" />
               </a>
               <span> 1205 руб.</span>
            </li>
            <li >
               <a href="#" className={styles.button__heart}>
                  <img src="/img/heart.svg" alt="heart" />
               </a>
            </li>
            <li>
               <a href="#" className={styles.button__user}>
                  <img width={20} height={20} src="/img/user.svg" alt="user" />
               </a>
            </li>
         </ul>
      </header>
   )
}

export default Header