import './../app.scss';

function Card  (props) {

   const onClickButton = ()=> {

   }

   return (
      <div className='sneakers' >

         {
            props.favorite 
            ?  <div className='favorite'>
                  <button onClick={onClickButton} className="button-cross _heart">
                     <img width={15} height={15} src="/img/like-heart.svg" alt="heart" />
                  </button>
               </div>
            : <div className='unfavorite'></div>
         }
         
         <img width={133} height={112} src={props.url} alt={props.name} />
         <h5>{props.name}</h5>
         <div className='sneakers__bottom'>
            <div className='bottom__title'>
               <span>ЦЕНА: </span>
               <b>{props.price} руб.</b>
            </div>
            {
               props.choice 
               ?  <button href="#" className="button-choice">
                     <img width={13} height={13} src="/img/check.svg" alt="check" />
                  </button>
               :  <button href="#" className="button-cross">
                     <img width={13} height={13} src="/img/cross.svg" alt="cross" />
                  </button>
            }
            
         </div>
      </div>
   
   );
}

export default Card;
