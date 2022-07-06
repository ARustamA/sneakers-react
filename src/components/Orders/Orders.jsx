import styles from '../Orders/style.module.scss';
import Card from '../Card/Index'

function Orders ({ items}) {


   return (
      <div className={styles.orders}>
         <h1>Мои покупки</h1>
         <div className={styles.card}>
            {items.map((obj) => (
                  <Card
                     name={obj.name}
                     price={obj.price}
                     url={obj.imgUrl}
                     id={obj.id}
                     key={obj.id}
                  
                     
                     />
               ))}
         </div>
         
      </div>

   )
}

export default Orders