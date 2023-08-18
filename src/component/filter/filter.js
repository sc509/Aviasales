import { useDispatch, useSelector } from 'react-redux';

import { filterAllUnchecked, filterAllChecked, toggleCheck } from '../../redux/actions';
import filterTicketsUtil from '../../Utilities/filterTicketsUtil';
import cheapestTicketsUtil from '../../Utilities/cheapestTicketsUtil';
import fastestTicketsUtil from '../../Utilities/fastestTicketsUtil';

import styles from './filter.module.scss';

function Filter() {
  const title = 'Количество пересадок';
  const dispatch = useDispatch();
  const { allChecked, oneChecked, twoChecked, threeChecked, fourChecked } = useSelector((state) => state.filter);
  const activeTab = useSelector((state) => state.tabs.activeTabs);
  const handleAllCheckBoxChange = (e) => {
    if (e.target.checked) {
      dispatch(filterAllChecked());
      dispatch(filterTicketsUtil());

      if (activeTab === 'Самый дешёвый') {
        dispatch(cheapestTicketsUtil());
      } else if (activeTab === 'Самый быстрый') {
        dispatch(fastestTicketsUtil());
      }
    } else {
      dispatch(filterAllUnchecked());
    }
  };

  const handleCheckBoxChange = (name) => {
    dispatch(toggleCheck(name));
    dispatch(filterTicketsUtil());

    if (activeTab === 'Самый дешёвый') {
      dispatch(cheapestTicketsUtil());
    } else if (activeTab === 'Самый быстрый') {
      dispatch(fastestTicketsUtil());
    }
  };

  const { aviasalesFilter, aviasalesFilterTitle, aviasalesFilterHover, checkboxContainer, checkboxContainerText } =
    styles;

  return (
    <section className={aviasalesFilter}>
      <h1 className={aviasalesFilterTitle}>{title.toUpperCase()}</h1>
      <div className={aviasalesFilterHover}>
        <label className={checkboxContainer}>
          <input type="checkbox" checked={allChecked} onChange={handleAllCheckBoxChange} />
          <span className={checkboxContainerText}>Все</span>
        </label>
      </div>
      <div className={aviasalesFilterHover}>
        <label className={checkboxContainer}>
          <input type="checkbox" checked={oneChecked} onChange={() => handleCheckBoxChange('oneChecked')} />
          <span className={checkboxContainerText}>Без пересадок</span>
        </label>
      </div>
      <div className={aviasalesFilterHover}>
        <label className={checkboxContainer}>
          <input type="checkbox" checked={twoChecked} onChange={() => handleCheckBoxChange('twoChecked')} />
          <span className={checkboxContainerText}>1 пересадка</span>
        </label>
      </div>
      <div className={aviasalesFilterHover}>
        <label className={checkboxContainer}>
          <input type="checkbox" checked={threeChecked} onChange={() => handleCheckBoxChange('threeChecked')} />
          <span className={checkboxContainerText}>2 пересадки</span>
        </label>
      </div>
      <div className={aviasalesFilterHover}>
        <label className={checkboxContainer}>
          <input type="checkbox" checked={fourChecked} onChange={() => handleCheckBoxChange('fourChecked')} />
          <span className={checkboxContainerText}>3 пересадки</span>
        </label>
      </div>
    </section>
  );
}

export default Filter;
