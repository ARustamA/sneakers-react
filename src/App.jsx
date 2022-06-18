import './app.scss';
import Card from './components/CardComponent'
import Drawer from './components/DrawerComponent';
import Header from './components/Header';


function App() {
  return (
    <div className="wrapper">

    {/* <Drawer /> */}
    <Header />

      <div className="content">

        <div className='content__title'>
          <h1 >Все кроссовки</h1>
          <div className='search'>
            <img width={13} height={11} src="/img/search.svg" alt="search" />
            <input placeholder='Поиск...' />

          </div>
        </div>

        <div className='content__body'>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

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
