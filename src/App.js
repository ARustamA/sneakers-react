import React from 'react';
import axios from 'axios';
import styles from './app.module.scss';
import Card from './components/Card/Index'
import Drawer from './components/Drawer/DrawerComponent';
import Header from './components/Header';


function App() {

  const[items, setItems] = React.useState([])

  const[cartItems, setCartItems] = React.useState([])

  const[searchValue, setSearchValue] = React.useState('')
  
  const [cardOpen, setCardOpen] = React.useState(false)

  React.useEffect(()=> {


    // fetch('https://62b2813420cad3685c8edbad.mockapi.io/items')
    //     .then((response) => {
    //     return response.json();
    //   }).then(json => {
    //     setItems(json);
    //   })

      axios.get('https://62b2813420cad3685c8edbad.mockapi.io/items')
      .then((response) => {setItems(response.data)})

      axios.get('https://62b2813420cad3685c8edbad.mockapi.io/cart')
      .then((response) => {setCartItems(response.data)})
    },  []);

  
  
  

 
    const addItemToCard = (item) =>{
      axios.post('https://62b2813420cad3685c8edbad.mockapi.io/cart', item)
      setCartItems(prev => [...prev, item])
    }

    const deleteItemToCard = (id) =>{
      // console.log(id)
      axios.delete(`https://62b2813420cad3685c8edbad.mockapi.io/cart/${id}`)
      setCartItems(prev => prev.filter(item=> item.id !== id))
    }

    const searchItem = (event) =>{
      setSearchValue(event.target.value)
    }

  
    

    const addItemToFavorite = (item) =>{
      console.log(item)
    }

    const onClear = () =>{
      setSearchValue('')
    }

  return (
    <div className={styles.wrapper}>

    { cardOpen && <Drawer items={cartItems} deleteItem={deleteItemToCard} onClose={()=> setCardOpen(false)}/>}
      <Header onClickCard={()=> setCardOpen(true)} />

      <div className={styles.content}>

        <div className={styles.content__title}>
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}" `: "Все кроссовки"}</h1>
          <div className={styles.search}>
            <img width={17} height={17} src="/img/search.svg" alt="search" />
            {searchValue && <img onClick={onClear} className={styles.clear} src="/img/btn-delete.svg" alt="clear" />}
            <input onChange={searchItem} value={searchValue} placeholder='Поиск...' />

          </div>
        </div>

        <div className={styles.content__body}>

          {items.filter(obj=>obj.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map((obj) => (
            <Card
                name={obj.name}
                price={obj.price}
                url={obj.imgUrl}
                id={obj.id}
                key={obj.id}
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
