import logo from '../../assets/Logo.png'
import styles from './logo.module.scss'

function Logo() {
    const {aviasales__logo} = styles;
    return (
        <div className={aviasales__logo}>
            <img src={logo} alt="Logo"/>
        </div>
    )

}

export default Logo;