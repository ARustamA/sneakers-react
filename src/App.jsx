import styles from './app.module.scss';
import Card from './components/Card/Index'
import Drawer from './components/Drawer/DrawerComponent';
import Header from './components/Header';

const arr = [
  {
    name: "Мужские Кроссовки Jordan Air Jordan 11", price: 10789,
    imgUrl: "/img/sneakers/1.jpg", choice: false, favorite: true,
  },

  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999,
    imgUrl: "/img/sneakers/2.jpg", choice: true, favorite: false,
  },

  {
    name: "Мужские Кроссовки Nike Air Max 270", price: 10999,
    imgUrl: "/img/sneakers/3.jpg", choice: false, favorite: false,
  },

  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 8499,
    imgUrl: "/img/sneakers/4.jpg", choice: false, favorite: false,
  },

  {
    name: "Кроссовки Puma X Aka Boku Future Rider", price: 8999,
    imgUrl: "/img/sneakers/5.jpg", choice: false, favorite: false,
  },

  {
    name: "Мужские Кроссовки Under Armour Curry 8", price: 15299,
    imgUrl: "/img/sneakers/6.jpg", choice: false, favorite: true,
  },

  {
    name: "Мужские Кроссовки Nike Kyrie 7", price: 13299, 
  imgUrl: "/img/sneakers/7.jpg", choice: false, favorite: false,
  },

  {
    name: "Мужские Кроссовки Jordan Air Jordan 11", price: 10789,
    imgUrl: "/img/sneakers/8.jpg", choice: false, favorite: false,
  },

  {
    name: "Мужские Мужские Кроссовки Nike LeBron XVIII", price: 16449,
    imgUrl: "/img/sneakers/9.jpg", choice: false, favorite: false,
  },

  {
    name: "Мужские Кроссовки Nike Lebron XVIII Low", price: 8399,
    imgUrl: "/img/sneakers/10.jpg", choice: false, favorite: false,
  },

  {
    name: "Кроссовки Puma X Aka Boku Future Rider", price: 7789,
    imgUrl: "/img/sneakers/11.jpg", choice: true, favorite: true,
  },

  {
    name: "Мужские Мужские Кроссовки Nike LeBron XVIII", price: 15449,
    imgUrl: "/img/sneakers/12.jpg", choice: false, favorite: false,
  },


];


function App() {
  return (
    <div className={styles.wrapper}>

      {/* <Drawer /> */}
      <Header />

      <div className={styles.content}>

        <div className={styles.content__title}>
          <h1 >Все кроссовки</h1>
          <div className={styles.search}>
            <img width={13} height={11} src="/img/search.svg" alt="search" />
            <input placeholder='Поиск...' />

          </div>
        </div>

        <div className={styles.content__body}>



          {arr.map((obj) => (
            <Card 
                name={obj.name}
                price={obj.price}
                url={obj.imgUrl}
                choice={obj.choice}
                favorite={obj.favorite}/>
          ))
          }


          {/* <div className={styles.sneakers}>
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Nike Air Max" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className={styles.sneakers__bottom}>
              <div className={styles.bottom__title}>
                <span>ЦЕНА: </span>
                <b>12 999 руб.</b>
              </div>
              <button href="#" className={styles.button_cross}>
                <img width={11} height={11} src="/img/cross.svg" alt="cross" />
              </button>
            </div>
          </div>


          <div className={styles.sneakers}>
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Blazer Mid Suede" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className={styles.sneakers__bottom}>
              <div className={styles.bottom__title}>
                <span>ЦЕНА: </span>
                <b>8 499 руб. </b>
              </div>
              <button href="#" className={styles.button_cross}>
                <img width={11} height={11} src="/img/cross.svg" alt="cross" />
              </button>
            </div>
          </div>


          <div className={styles.sneakers}>
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Boku Future Rider" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className={styles.sneakers__bottom}>
              <div className={styles.bottom__title}>
                <span>ЦЕНА: </span>
                <b>8 999 руб.</b>
              </div>
              <button href="#" className={styles.button_cross}>
                <img width={11} height={11} src="/img/cross.svg" alt="cross" />
              </button>
            </div>
          </div>


          <div className={styles.sneakers}>
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Boku Future Rider" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className={styles.sneakers__bottom}>
              <div className={styles.bottom__title}>
                <span>ЦЕНА: </span>
                <b>8 999 руб.</b>
              </div>
              <button href="#" className={styles.button_cross}>
                <img width={11} height={11} src="/img/cross.svg" alt="cross" />
              </button>
            </div>
          </div>
          <div className={styles.sneakers}>
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Boku Future Rider" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className={styles.sneakers__bottom}>
              <div className={styles.bottom__title}>
                <span>ЦЕНА: </span>
                <b>8 999 руб.</b>
              </div>
              <button href="#" className={styles.button_cross}>
                <img width={11} height={11} src="/img/cross.svg" alt="cross" />
              </button>
            </div>
          </div> */}

        </div>

      </div>
    </div>
  );
}

export default App;
