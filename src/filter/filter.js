import './filter.scss'

function Filter() {
    const title = 'Количество пересадок'
    return (
        <section className="aviasales__filter">
            <h1 className="aviasales__filter-title">{title.toUpperCase()}</h1>
            <div className="aviasales__filter--hover">
                <label className="checkbox-container">
                    <input type="checkbox"/>
                    <span className="checkbox-container__text">Все</span>
                </label>
            </div>
            <div className="aviasales__filter--hover">
                <label className="checkbox-container">
                    <input type="checkbox"/>
                    <span className="checkbox-container__text">Без пересадок</span>
                </label>
            </div>
            <div className="aviasales__filter--hover">
                <label className="checkbox-container">
                    <input type="checkbox"/>
                    <span className="checkbox-container__text">1 пересадка</span>
                </label>
            </div>
            <div className="aviasales__filter--hover">
                <label className="checkbox-container">
                    <input type="checkbox"/>
                    <span className="checkbox-container__text">2 пересадки</span>
                </label>
            </div>
            <div className="aviasales__filter--hover">
                <label className="checkbox-container">
                    <input type="checkbox"/>
                    <span className="checkbox-container__text">3 пересадки</span>
                </label>
            </div>
        </section>
    )
}

export default Filter;