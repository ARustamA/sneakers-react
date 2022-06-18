import './app.scss';


function App() {
  return (
    <div className="wrapper">

      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>

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

      <div className="content">

        <div className='content__title'>
          <h1 >Все кроссовки</h1>
          <div className='search'>
            <img width={13} height={11} src="/img/search.svg" alt="search" />
            <input placeholder='Поиск...' />

          </div>
        </div>

        <div className='content__body'>

          <div className='sneakers'>

            <div className='favorite'>
              <button href="#" className="button-cross">
                <img width={15} height={15} src="/img/like-heart.svg" alt="heart" />
              </button>
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Blazer Mid Suede" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='sneakers__bottom'>
              <div className='bottom__title'>
                <span>ЦЕНА: </span>
                <b>12 999 руб.</b>
              </div>
              <button href="#" className="button-cross">
                <img width={11} height={11} src="/img/cross.svg" alt="cross" />
              </button>
            </div>
          </div>

          <div className='sneakers'>
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Nike Air Max" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className='sneakers__bottom'>
              <div className='bottom__title'>
                <span>ЦЕНА: </span>
                <b>12 999 руб.</b>
              </div>
              <button href="#" className="button-cross">
                <img width={11} height={11} src="/img/cross.svg" alt="cross" />
              </button>
            </div>
          </div>


          <div className='sneakers'>
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Blazer Mid Suede" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='sneakers__bottom'>
              <div className='bottom__title'>
                <span>ЦЕНА: </span>
                <b>8 499 руб. </b>
              </div>
              <button href="#" className="button-cross">
                <img width={11} height={11} src="/img/cross.svg" alt="cross" />
              </button>
            </div>
          </div>


          <div className='sneakers'>
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Boku Future Rider" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className='sneakers__bottom'>
              <div className='bottom__title'>
                <span>ЦЕНА: </span>
                <b>8 999 руб.</b>
              </div>
              <button href="#" className="button-cross">
                <img width={11} height={11} src="/img/cross.svg" alt="cross" />
              </button>
            </div>
          </div>


          <div className='sneakers'>
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Boku Future Rider" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className='sneakers__bottom'>
              <div className='bottom__title'>
                <span>ЦЕНА: </span>
                <b>8 999 руб.</b>
              </div>
              <button href="#" className="button-cross">
                <img width={11} height={11} src="/img/cross.svg" alt="cross" />
              </button>
            </div>
          </div>
          <div className='sneakers'>
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Boku Future Rider" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className='sneakers__bottom'>
              <div className='bottom__title'>
                <span>ЦЕНА: </span>
                <b>8 999 руб.</b>
              </div>
              <button href="#" className="button-cross">
                <img width={11} height={11} src="/img/cross.svg" alt="cross" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
