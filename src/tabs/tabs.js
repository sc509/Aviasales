import styles from "./tabs.module.scss";

function Tabs(){
    const cheapest = "Самый дешёвый";
    const fastest = "Самый быстрый";
    const optimal = "Оптимальный";
    return(
        <section className={styles.aviasales__tabs}>
            <button className={styles.aviasales__tabsCheapest}>{cheapest.toUpperCase()}</button>
            <button className={styles.aviasales__tabsFastest}>{fastest.toUpperCase()}</button>
            <button className={styles.aviasales__tabsOptimal}>{optimal.toUpperCase()}</button>
        </section>
    )
}

export default Tabs;