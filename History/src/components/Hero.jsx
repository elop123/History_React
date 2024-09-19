import s from '../style/Hero.module.scss'


function Hero ({ title, text }){
    return(
    <div className={s.container}>
      <div className={s.circleLeft}></div>
      <div className={s.circleRight}></div>
        <div  className={s.textStyle}>
            <h1>{title}</h1>
            <p className={s.textStyle}>{text}</p>
        </div>
        <div className={s.circleLeft2}></div>
        <div className={s.circleRight2}></div>
    </div>)
}

export default Hero