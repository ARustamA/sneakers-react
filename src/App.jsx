import React from 'react';
import axios from 'axios';
import styles from './app.module.scss';
import Drawer from './components/Drawer/DrawerComponent';
import Header from './components/Header/Header';
import {  Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import Home from './components/HomePage/Home';


function App() {

  const [items, setItems] = React.useState([])

  const [cartItems, setCartItems] = React.useState([])

  const [searchValue, setSearchValue] = React.useState('')

  const [cardOpen, setCardOpen] = React.useState(false)

  const [favorites, setFavorites] = React.useState([])

  React.useEffect(() => {
    axios.get('https://62b2813420cad3685c8edbad.mockapi.io/items')
      .then((response) => { setItems(response.data) })

    axios.get('https://62b2813420cad3685c8edbad.mockapi.io/cart')
      .then((response) => { setCartItems(response.data) })

    axios.get('https://62b2813420cad3685c8edbad.mockapi.io/favorites')
      .then((response) => { setFavorites(response.data) })

    }, []);

    
    

    // fetch('https://62b2813420cad3685c8edbad.mockapi.io/items')
    //     .then((response) => {
    //     return response.json();
    //   }).then(json => {
    //     setItems(json);
    //   })


  const addItemToCard = (item) => {
    axios.post('https://62b2813420cad3685c8edbad.mockapi.io/cart', item)
    setCartItems(prev => [...prev, item])
  }

  const deleteItemToCard = (id) => {
    axios.delete(`https://62b2813420cad3685c8edbad.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const searchItem = (event) => {
    setSearchValue(event.target.value)
  }
  const onClear = () => {
    setSearchValue('')
  }

  const addItemToFavorite = async (obj) => {
    if(favorites.find( (favObj) => favObj.id === obj.id)){
      axios.delete(`https://62b2813420cad3685c8edbad.mockapi.io/favorites/${obj.id}`)
      setFavorites(prev => prev.filter(item => item.id !== obj.id))}
    else{
      const { data } = await axios.post('https://62b2813420cad3685c8edbad.mockapi.io/favorites', obj)
      setFavorites(prev =>[...prev, data])
    }
  

  }

  return (
    <div className={styles.wrapper}>

      {cardOpen && 
          <Drawer items={cartItems} 
                  deleteItem={deleteItemToCard} 
                  onClose={() => setCardOpen(false)} /> }

          <Header onClickCard={() => setCardOpen(true)} />


        <Routes>
          <Route  path="/" 
                  element={<Home 
                            items={items} 
                            searchValue={searchValue}
                            onClear={onClear}
                            searchItem={searchItem}
                            addItemToCard={addItemToCard}
                            addItemToFavorite={addItemToFavorite}
                            deleteItemToCard={deleteItemToCard}/>
          } />

          <Route  path="/favorites"
                  element={<Favorites 
                            items={favorites}
                            addItemToFavorite={addItemToFavorite} />}
          />                
        </Routes>
      
      
      
    </div>
  )
}

export default App;
