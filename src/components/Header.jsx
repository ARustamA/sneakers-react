import './../app.scss';

function Header() {
   return (
      <header >
         <div className='header__left'>
            <img width={40} height={40} src="/img/logo.png" alt="logo" />
            <div className='header__info'>
               <h3>REACT SNEAKERS</h3>
               <p>Магазин лучших кроссовок</p>
            </div>
         </div>

         <ul className='header__right'>
            <li className='margin__li'>
               <a href="#" className="button__cart">
                  <img width={20} height={20} src="/img/cart.svg" alt="cart" />
               </a>
               <span> 1205 руб.</span>
            </li>
            <li >
               <a href="#" className="button__heart">
                  <img width={20} height={20} src="/img/heart.svg" alt="heart" />
               </a>
            </li>
            <li>
               <a href="#" className="button__user">
                  <img width={20} height={20} src="/img/user.svg" alt="user" />
               </a>
            </li>
         </ul>
      </header>
   )
}

export default Header