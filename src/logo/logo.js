import logo from '../assets/Logo.png'
import './logo.scss'

function Logo(){
    return(
        <div className="aviasales__logo">
            <img src={logo} alt="Logo"/>
        </div>
    )

}
export default Logo;