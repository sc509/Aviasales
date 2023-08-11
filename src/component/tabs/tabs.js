import styles from "./tabs.module.scss";
import {useDispatch } from "react-redux";
import {cheapestTickets, fastestTickets} from "../../redux/actions";

function Tabs(){
    const cheapest = "Самый дешёвый";
    const fastest = "Самый быстрый";
    const dispatch = useDispatch();
    const handleCheapestTab = () => {
        dispatch(cheapestTickets())
    }
    const handleFastestTab = () => {
        dispatch(fastestTickets())
    }
    const {aviasales__tabs,aviasales__tabsCheapest,aviasales__tabsFastest } = styles;
    return(
        <section className={aviasales__tabs}>
            <button className={aviasales__tabsCheapest} onClick={handleCheapestTab}>{cheapest.toUpperCase()}</button>
            <button className={aviasales__tabsFastest} onClick={handleFastestTab}>{fastest.toUpperCase()}</button>
        </section>
    )
}

export default Tabs;