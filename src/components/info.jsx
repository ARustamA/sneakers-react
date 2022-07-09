import React from 'react'

import AppContext from '../context'
import styles from './Drawer/Drawer.module.scss';

const Info = ({ name, image, description, buttonName }) => {
   const { setCardOpen } = React.useContext(AppContext)
   return (
      <div className={styles.drawer__bottom}>
         <div className={styles.cardClean}>
            <img width={170} height={170} src={image} alt="card" />
            <h3>{name}</h3>
            <p>{description}</p>
         </div>
         <button className={styles.button} onClick={() => setCardOpen(false)}>
            <img width={20} height={20} src="/sneakers-react/img/pointer-left.svg" alt="pointer" />
            <p>{buttonName}</p>
         </button>
      </div>
   )
}
export default Info