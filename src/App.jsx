import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import Drawer from './components/Drawer/DrawerComponent';
import Header from './components/Header/Header';
import Favorites from './components/Favorites/Favorites';
import Home from './components/HomePage/Home';
import Orders from './components/Orders/Orders';

import AppContext from './context'
import styles from './app.module.scss';


function App() {

  const [items, setItems] = React.useState([])

  const [cartItems, setCartItems] = React.useState([])

  const [searchValue, setSearchValue] = React.useState('')

  const [cardOpen, setCardOpen] = React.useState(false)

  const [isLoading, setIsLoading] = React.useState(false)

  const [favorites, setFavorites] = React.useState([])

  React.useEffect(() => {
    async function generalData() {
      setIsLoading(true)
      const itemsResponse = await axios.get('https://62b2813420cad3685c8edbad.mockapi.io/items')
      const cartItemsResponse = await axios.get('https://62b2813420cad3685c8edbad.mockapi.io/cart')
      const favoritesResponse = await axios.get('https://62b2813420cad3685c8edbad.mockapi.io/favorites')

      setIsLoading(false)
      setCartItems(cartItemsResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }
    generalData()
  }, []);
  const searchItem = (event) => {
    setSearchValue(event.target.value)
  }
  const onClear = () => {
    setSearchValue('')
  }
  //добавление в корзину
  const addItemToCard = (item) => {
    try {
      if (cartItems.find((cartItem) => cartItem.id === item.id)) {
        axios.delete(`https://62b2813420cad3685c8edbad.mockapi.io/cart/${item.id}`)
        setCartItems(prev => prev.filter(obj => obj.id !== item.id))
      }
      else {
        axios.post('https://62b2813420cad3685c8edbad.mockapi.io/cart', item)
        setCartItems(prev => [...prev, item])
      }
    } catch (error) {
      alert('Не удалось добавить в корзину')
    }
  }
  const deleteItemToCard = (id) => {
    axios.delete(`https://62b2813420cad3685c8edbad.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }
  //добавление в избранное
  const addItemToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://62b2813420cad3685c8edbad.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter(item => item.id !== obj.id))
      }
      else {
        const { data } = await axios.post('https://62b2813420cad3685c8edbad.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  }
  const isItemAddedCart = (id) => {
    return cartItems.some((item) => item.id === id)
  }

  return (
    <AppContext.Provider 
    value={{
      items, cartItems, favorites, addItemToFavorite, addItemToCard,
      isItemAddedCart, setCardOpen, setCartItems, deleteItemToCard}}>

      <div className={styles.wrapper}>
        {cardOpen &&
          <Drawer items={cartItems}
            onClose={() => setCardOpen()} />}
          <Header onClickCard={() => setCardOpen(true)} />

        <Routes>
          <Route path="/"
            element={<Home
              searchValue={searchValue}
              onClear={onClear}
              searchItem={searchItem}
              isLoading={isLoading} />
            } />
          <Route path="/favorites"
            element={<Favorites
              addItemToCard={addItemToCard}
              addItemToFavorite={addItemToFavorite} />} />
          <Route path="/orders"
            element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App;
