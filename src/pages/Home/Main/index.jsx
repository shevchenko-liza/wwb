import icon1 from '../Main/photo/mainIcon1.jpg'
import icon2 from '../Main/photo/mainIcon2.jpg'
import icon3 from '../Main/photo/mainIcon3.jpg'
import main from '../Main/photo/main.jpg'
import map from '../Main/photo/map.jpg'
import mainBackground from '../Main/photo/mainBackground.jpg'
import classes from '../Main/styles.module.scss'
import clsx from 'clsx'
import { Item } from './Item'
import React from 'react'

export const Main=()=>{
    return(
        <div className={classes.main}>
             <span>
                <img src={main} alt="" className={classes.mainPhoto}/>
                
                <div className={classes.mainText}>Сделай заказ на 399 грн 
            и получи салат «Цезарь» в подарок!</div>
            
            <div className={classes.mainButton}>
            <button type="submit" className={clsx(classes.DiscountButton, classes.order)}>Подробнее об акции</button>
            </div>
            <div className={classes.mainDishes}>Рекомендуемые блюда</div>
            </span>
           
        </div>
    )
}
 const dish=[
    {
        "id": 1,
        "name": "Сыр на мангале с лимонно-медовой заправкой",
        "price": "29 грн",
        "photo": icon1,
        "kind": "Мангал"
    },
    {
        "id": 2,
        "name": "Куриный бургер-сет ",
        "price": "60 грн",
        "photo": icon2,
        "kind": "Бургеры"
    },
    {
        "id": 3,
        "name": "Большой денер",
      
        "photo": icon3,
        "kind": "Мангал"
    },
 ]

 export const DishMain = () => (
    <div className={classes.dish}>
      {dish.map((item, index) => (
        <Item
          key={item.id}
          name={item.name}
         kind={item.kind}
          photo={item.photo}
         price={item.price}
          />
        

      ))}
      
    </div>
    
  )