import './tabs.scss'

function Tabs(){
    const cheapest = "Самый дешёвый";
    const fastest = "Самый быстрый";
    const optimal = "Оптимальный";
    return(
        <section className="aviasales__tabs">
            <button className="aviasales__tabs-cheapest">{cheapest.toUpperCase()}</button>
            <button className="aviasales__tabs-fastest">{fastest.toUpperCase()}</button>
            <button className="aviasales__tabs-optimal">{optimal.toUpperCase()}</button>
        </section>
    )
}

export default Tabs;