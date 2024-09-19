import img from '../assets/images/header-img.jpg'
import s from '../style/Header.module.scss'

function Header (){
    return(
    <>
    <div className={s.cornerStyle}></div>
    <div className={s.cornerStyle2}></div>
    
    <img className={s.imageStyle} src={img} alt="header-img" />
   
    </>)
}

export default Header