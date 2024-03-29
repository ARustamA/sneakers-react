import React from 'react';

import Card from './../Card/Index';
import Title from '../TitleApp';

import AppContext from '../../context';
import styles from './style.module.scss';

function Home({ searchValue,
   onClear,
   searchItem,
   isLoading }) {
   const { items, addItemToFavorite, addItemToCard, deleteItemToCard } = React.useContext(AppContext);

   const renderItems = () => {

      const filterItems = items.filter((obj) =>
         obj.name.toLowerCase().includes(searchValue.toLowerCase()));

      return (isLoading ? [...Array(8)] : filterItems.map((obj) => (
         <Card
            url={obj.imgUrl}
            key={obj.id}
            onAddToFavorite={(item) => addItemToFavorite(item)}
            onAddToCard={(item) => addItemToCard(item)}
            deleteItem={(item) => deleteItemToCard(item)}
            // isAddToCard={isItemAddedCart(obj && obj.id)}
            isLoading={isLoading}
            {...obj} />
      )));
   };

   return (
      <div className={styles.content}>
         <Title searchValue={searchValue}
            onClear={onClear}
            searchItem={searchItem} />
         <div className={styles.content__body}>
            {renderItems()}
         </div>
      </div>

   );
}

export default Home;