import styles from "./filter.module.scss";

function Filter() {
    const title = 'Количество пересадок'
    return (
        <section className={styles.aviasales__filter}>
            <h1 className={styles.aviasales__filterTitle}>{title.toUpperCase()}</h1>
            <div className={styles.aviasales__filterHover}>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox"/>
                    <span className={styles.checkboxContainer__text}>Все</span>
                </label>
            </div>
            <div className={styles.aviasales__filterHover}>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox"/>
                    <span className={styles.checkboxContainer__text}>Без пересадок</span>
                </label>
            </div>
            <div className={styles.aviasales__filterHover}>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox"/>
                    <span className={styles.checkboxContainer__text}>1 пересадка</span>
                </label>
            </div>
            <div className={styles.aviasales__filterHover}>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox"/>
                    <span className={styles.checkboxContainer__text}>2 пересадки</span>
                </label>
            </div>
            <div className={styles.aviasales__filterHover}>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox"/>
                    <span className={styles.checkboxContainer__text}>3 пересадки</span>
                </label>
            </div>
        </section>
    )
}

export default Filter;