import s from '../style/Year_Content.module.scss'
import lamp from '../assets/images/Light.png'


function Year_Content (){
    return(
        <div className={s.yearSectionStyle}>
            <img  className={s.lampImage} src={lamp} alt="lamp-img" />
    <section className={s.yearStyle}>
        <div className={s.circle}></div>
    </section>
    <section className={s.yearStyle2}>
        <div className={s.circle2}></div>
    </section>
    <section className={s.yearStyle3}>
        <div className={s.circle3}></div>
    </section>
    <section className={s.yearStyle2}>
        <div className={s.circle2}></div>
    </section>
    <section className={s.yearStyle3}>
        <div className={s.circle3}></div>
    </section>
    </div>)
}

export default Year_Content