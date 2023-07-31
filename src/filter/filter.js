import styles from "./filter.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {filterAllUnchecked, filterAllChecked, toggleCheck} from "../redux/actions";

function Filter() {
    const title = 'Количество пересадок'
    const dispatch = useDispatch();
    const {allChecked, oneChecked, twoChecked, threeChecked, fourChecked} = useSelector(state => state.filter);

    const handleAllCheckBoxChange = (e) => {
        if (e.target.checked) {
            dispatch(filterAllChecked());
        }
        if (!e.target.checked) {
            dispatch(filterAllUnchecked());
        }
    }
    const handleCheckBoxChange = (name) => {
        dispatch(toggleCheck(name));
    }

    return (
        <section className={styles.aviasales__filter}>
            <h1 className={styles.aviasales__filterTitle}>{title.toUpperCase()}</h1>
            <div className={styles.aviasales__filterHover}>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox" checked={allChecked} onChange={handleAllCheckBoxChange}/>
                    <span className={styles.checkboxContainer__text}>Все</span>
                </label>
            </div>
            <div className={styles.aviasales__filterHover}>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox" checked={oneChecked}  onChange={() => handleCheckBoxChange('oneChecked')}/>
                    <span className={styles.checkboxContainer__text}>Без пересадок</span>
                </label>
            </div>
            <div className={styles.aviasales__filterHover}>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox" checked={twoChecked} onChange={() => handleCheckBoxChange('twoChecked')}/>
                    <span className={styles.checkboxContainer__text}>1 пересадка</span>
                </label>
            </div>
            <div className={styles.aviasales__filterHover}>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox" checked={threeChecked} onChange={() => handleCheckBoxChange('threeChecked')}/>
                    <span className={styles.checkboxContainer__text}>2 пересадки</span>
                </label>
            </div>
            <div className={styles.aviasales__filterHover}>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox" checked={fourChecked} onChange={() => handleCheckBoxChange('fourChecked')}/>
                    <span className={styles.checkboxContainer__text}>3 пересадки</span>
                </label>
            </div>
        </section>
    )
}

export default Filter;