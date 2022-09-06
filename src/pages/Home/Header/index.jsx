import clsx from 'clsx'
import icon1 from '../Header/photo/video.png'
import classes from '../Header/styles.module.scss'

export const Header = () => {
    return(
    <div>
        <div className={classes.width}>
            <div className={classes.text}>Лучший ресторан Запорожья 
            с доставкой в любой район города</div>
    <div className={classes.mainButton}>
    <button type="submit" className={clsx(classes.button, classes.order)}>Доставка</button>
       <button type="submit" className={clsx(classes.button, classes.order)}>Ресторан</button>
       </div>
    </div>
        
     
       <span className={classes.iconBox}>
            <img src={icon1} className={classes.photo}/>
       </span>
    </div>
    )
    }
  