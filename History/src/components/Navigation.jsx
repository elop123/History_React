import s from '../style/Navigation.module.scss'
import { Link } from "react-router-dom";


function Navigation (){
    return(
    <nav className={s.navStyle}>
        <ul>
            <li>
                <Link to ="/ByDate" >BY DATE</Link>
            </li>
            <li><Link to ="/" >TODAY</Link>
            </li>
            <li><Link to ="/About" >ABOUT</Link>
            </li>
        </ul>
    </nav>)
}

export default Navigation