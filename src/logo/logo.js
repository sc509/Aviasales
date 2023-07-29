import logo from '../assets/Logo.png'
import styles from  './logo.module.scss'

function Logo(){
    return(
        <div className={styles.aviasales__logo}>
            <img src={logo} alt="Logo"/>
        </div>
    )

}
export default Logo;