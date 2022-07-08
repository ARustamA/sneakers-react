import styles from '../Orders/style.module.scss';
import Card from '../Card/Index'
import React from 'react';
import axios from 'axios';


function Orders ({ }) {
   const [orderItems, setOrderItems] = React.useState([])
   const [isLoading, setIsLoading] = React.useState(true)
  
   React.useEffect(()=>{
      (async ()=>{
         try {
            const {data} = await axios.get('https://62b2813420cad3685c8edbad.mockapi.io/orders')
            setOrderItems(data.map((obj)=>obj.items).flat())
            setIsLoading(false)
            // setOrderItems(data.reduce((prev,obj)=>[...prev, ...obj.items],[]))
         } catch (error) {
            alert('Не удалось выгрузить данные с сервера') 
            console.error(error)
         }
      } )()
   }, [])

   return (
      <div className={styles.orders}>
         <h1>Мои покупки</h1>
         <div className={styles.card}>
            {isLoading ? [...Array(8)] :orderItems.map((obj) => (
                  <Card
                  key={obj.id}
                  isLoading={isLoading}
                  {...obj}
                  
                  />
               ))}
         </div>
      </div>
   )
}

export default Orders