import styles from "./filter.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {filterAllUnchecked, filterAllChecked, toggleCheck, filterTickets} from "../../redux/actions";

function Filter() {
    const title = 'Количество пересадок'
    const dispatch = useDispatch();
    const {allChecked, oneChecked, twoChecked, threeChecked, fourChecked} = useSelector(state => state.filter);
    const handleAllCheckBoxChange = (e) => {
        if (e.target.checked) {
            dispatch(filterAllChecked());
            dispatch(filterTickets());
        } else {
            dispatch(filterAllUnchecked());
        }
    }

    const handleCheckBoxChange = (name) => {
        dispatch(toggleCheck(name));
        dispatch(filterTickets());
    }

    const {
        aviasales__filter,
        aviasales__filterTitle,
        aviasales__filterHover,
        checkboxContainer,
        checkboxContainer__text
    } = styles

    return (
        <section className={aviasales__filter}>
            <h1 className={aviasales__filterTitle}>{title.toUpperCase()}</h1>
            <div className={aviasales__filterHover}>
                <label className={checkboxContainer}>
                    <input type="checkbox" checked={allChecked} onChange={handleAllCheckBoxChange}/>
                    <span className={checkboxContainer__text}>Все</span>
                </label>
            </div>
            <div className={aviasales__filterHover}>
                <label className={checkboxContainer}>
                    <input type="checkbox" checked={oneChecked} onChange={() => handleCheckBoxChange('oneChecked')}/>
                    <span className={checkboxContainer__text}>Без пересадок</span>
                </label>
            </div>
            <div className={aviasales__filterHover}>
                <label className={checkboxContainer}>
                    <input type="checkbox" checked={twoChecked} onChange={() => handleCheckBoxChange('twoChecked')}/>
                    <span className={checkboxContainer__text}>1 пересадка</span>
                </label>
            </div>
            <div className={aviasales__filterHover}>
                <label className={checkboxContainer}>
                    <input type="checkbox" checked={threeChecked}
                           onChange={() => handleCheckBoxChange('threeChecked')}/>
                    <span className={checkboxContainer__text}>2 пересадки</span>
                </label>
            </div>
            <div className={aviasales__filterHover}>
                <label className={checkboxContainer}>
                    <input type="checkbox" checked={fourChecked} onChange={() => handleCheckBoxChange('fourChecked')}/>
                    <span className={checkboxContainer__text}>3 пересадки</span>
                </label>
            </div>
        </section>
    )
}

export default Filter;