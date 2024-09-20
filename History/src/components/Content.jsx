import s from '../style/Content.module.scss';
import Api from './Api';
import light from '../assets/images/Light.png'
import dark from '../assets/images/icons-dark.png'



function Content({darkStyle , changeTheme}) {


  return (
    <main className={darkStyle ? s.dark : s.light}>
      <img  onClick={changeTheme} className={s.lampImage} src={darkStyle? light: dark} alt="lamp-img" /> 
    <Api />
    </main>
  );
}

export default Content;
