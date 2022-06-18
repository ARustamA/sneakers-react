import './../app.scss';

function Card  () {
   return (
      <div className='sneakers' >
         <div className='favorite'>
            <button href="#" className="button-cross _heart">
               <img width={15} height={15} src="/img/like-heart.svg" alt="heart" />
            </button>
         </div>
         <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Blazer Mid Suede" />
         <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
         <div className='sneakers__bottom'>
            <div className='bottom__title'>
               <span>ЦЕНА: </span>
               <b>12 999 руб.</b>
            </div>
            <button href="#" className="button-cross">
               <img width={11} height={11} src="/img/cross.svg" alt="cross" />
            </button>
         </div>
      </div>
   
   );
}

export default Card;
