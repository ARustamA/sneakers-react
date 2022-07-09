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
      try {
        setIsLoading(true)
    const [itemsResponse, cartItemsResponse, favoritesResponse] =
          await Promise.all([
            axios.get('https://62b2813420cad3685c8edbad.mockapi.io/items'),
            axios.get('https://62b2813420cad3685c8edbad.mockapi.io/cart'),
            axios.get('https://62b2813420cad3685c8edbad.mockapi.io/favorites')
                ])
        setIsLoading(false)
        setCartItems(cartItemsResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
      } catch (error) {
        alert('Ошибка при запросе данных')
        console.error(error)
      }
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
  const addItemToCard = async (obj) => {
    try {
      const findItem =cartItems.find((item) => item.parentId === obj.id)
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => item.parentId !== obj.id))
        await axios.delete(`https://62b2813420cad3685c8edbad.mockapi.io/cart/${findItem.id}`)
        
      }
      else {
        const {data} =  await axios.post('https://62b2813420cad3685c8edbad.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в корзину')
      console.error(error)
    }
  }
  //удаление с корзины
  const deleteItemToCard = async(parentId) => {
    try {
      await axios.delete(`https://62b2813420cad3685c8edbad.mockapi.io/cart/${parentId}`)
      setCartItems((prev) => prev.filter((item) => item.id !== parentId))
    } catch (error) {
      alert('не удалось удалить товар с корзины')
      console.error(error)
    }
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
      console.error(error)
    }
  }
  // есть ли товар в корзине
  const isItemAddedCart = (id) => {
    return cartItems.some((item) => item.parentId === id)
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
          <Route path=""
            element={<Home
              searchValue={searchValue}
              onClear={onClear}
              searchItem={searchItem}
              isLoading={isLoading} />
            } />
          <Route path="favorites"
            element={<Favorites
              addItemToCard={addItemToCard}
              addItemToFavorite={addItemToFavorite} />} />
          <Route path="orders"
            element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App;
