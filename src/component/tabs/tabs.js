import styles from "./tabs.module.scss";
import {useDispatch } from "react-redux";
import {cheapestTickets} from "../../redux/actions";

function Tabs(){
    const cheapest = "Самый дешёвый";
    const fastest = "Самый быстрый";
    const optimal = "Оптимальный";
    const dispatch = useDispatch();
    const handleCheapestTab = () => {
        dispatch(cheapestTickets())
    }

    return(
        <section className={styles.aviasales__tabs}>
            <button className={styles.aviasales__tabsCheapest} onClick={handleCheapestTab}>{cheapest.toUpperCase()}</button>
            <button className={styles.aviasales__tabsFastest}>{fastest.toUpperCase()}</button>
            <button className={styles.aviasales__tabsOptimal}>{optimal.toUpperCase()}</button>
        </section>
    )
}

export default Tabs;