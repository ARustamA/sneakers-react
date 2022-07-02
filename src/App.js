import React from 'react';
import styles from './app.module.scss';
import Card from './components/Card/Index'
import Drawer from './components/Drawer/DrawerComponent';
import Header from './components/Header';


function App() {

  const[items, setItems] = React.useState([])

  const[cartItems, setCartItems] = React.useState([])
  
  const [cardOpen, setCardOpen] = React.useState(false)

  React.useEffect(()=> {
    fetch('https://62b2813420cad3685c8edbad.mockapi.io/items')
        .then((response) => {
        return response.json();
      }).then(json => {
        setItems(json);
      })
    },  []);

    const addItemToCard = (item) =>{
      
      setCartItems(prev => [...prev, item])
        
        
    }
  
    

    const addItemToFavorite = (item) =>{
      console.log(item)
    }

  return (
    <div className={styles.wrapper}>

    { cardOpen && <Drawer items={cartItems} onClose={()=> setCardOpen(false)}/>}
      <Header onClickCard={()=> setCardOpen(true)} />

      <div className={styles.content}>

        <div className={styles.content__title}>
          <h1 >Все кроссовки</h1>
          <div className={styles.search}>
            <img width={13} height={11} src="/img/search.svg" alt="search" />
            <input placeholder='Поиск...' />

          </div>
        </div>

        <div className={styles.content__body}>

          {items.map((obj) => (
            <Card 
                name={obj.name}
                price={obj.price}
                url={obj.imgUrl}
                id={obj.id}
                onAddToFavorite={(item)=>addItemToFavorite(item)}
                onAddToCard={(item)=>addItemToCard(item)}
                />
          ))
          }


        </div>

      </div>
    </div>
  );
}

export default App;
