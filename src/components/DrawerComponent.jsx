import './../app.scss';

function Drawer() {
   return (
      <div className="overlay">
         <div className="drawer">

            <h2>
               Корзина <img className='cart__item-remove' src="/img/btn-remove.svg" alt="remove" />
            </h2>


            <div className="items">

               <div className="cart__item">
                  <img width={65} height={65} src="/img/sneakers/1.jpg" alt="Blazer Mid Suede" />
                  <div className='cart__item-text'>
                     <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                     <b>12 999 руб.</b>
                  </div>

                  <img className='cart__item-remove' src="/img/btn-remove.svg" alt="remove" />
               </div>

               <div className="cart__item">
                  <img width={65} height={65} src="/img/sneakers/1.jpg" alt="Blazer Mid Suede" />
                  <div className='cart__item-text'>
                     <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                     <b>12 999 руб.</b>
                  </div>

                  <img className='cart__item-remove' src="/img/btn-remove.svg" alt="remove" />
               </div>

            </div>
            <div className="drawer__bottom">
               <ul>
                  <li className="drawer__bottom-li">
                     <span>Итого: </span>
                     <div className="drawer__bottom-line"></div>
                     <b>21498 руб. </b>
                  </li>
                  <li className="drawer__bottom-li">
                     <span>Налог 5%: </span>
                     <div className="drawer__bottom-line"></div>
                     <b>1074 руб. </b>
                  </li>
               </ul>
            </div>
            <button href="#" className="button">
               <p>Оформить заказ</p>
               <img width={20} height={20} src="/img/pointer-right.svg" alt="pointer" />
            </button>
         </div>
      </div>
   )
}

export default Drawer