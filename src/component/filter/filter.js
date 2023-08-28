import { useDispatch, useSelector } from 'react-redux';

import { filterAllChecked, filterAllUnchecked, setActiveTab, toggleCheck } from '../../redux/actions';
import filterTicketsUtil from '../../Utilities/filterTicketsUtil';
import cheapestTicketsUtil from '../../Utilities/cheapestTicketsUtil';
import fastestTicketsUtil from '../../Utilities/fastestTicketsUtil';
import { CHEAPEST_TICKETS, FASTEST_TICKETS, FILTER_TICKET } from '../../redux/types';

import styles from './filter.module.scss';

function Filter() {
  const title = 'Количество пересадок';
  const dispatch = useDispatch();
  const { allChecked, oneChecked, twoChecked, threeChecked, fourChecked } = useSelector((state) => state.filter);
  const activeTab = useSelector((state) => state.tabs.activeTabs);
  const filter = useSelector((state) => state.filter);
  const tickets = useSelector((state) => state.ticket.tickets);
  const cheapest = 'Самый дешёвый';
  const fastest = 'Самый быстрый';

  const handleAllCheckBoxChange = (e) => {
    if (e.target.checked) {
      dispatch(filterAllChecked());
    } else {
      dispatch(filterAllUnchecked());
    }
    const allTickets = [...tickets];
    const filteredTickets = filterTicketsUtil(
      allTickets,
      e.target.checked,
      oneChecked,
      twoChecked,
      threeChecked,
      fourChecked
    );
    dispatch({ type: FILTER_TICKET, payload: filteredTickets });

    if (activeTab === 'Самый дешёвый') {
      const cheapestTickets = cheapestTicketsUtil(filteredTickets, filter);
      dispatch({
        type: CHEAPEST_TICKETS,
        payload: cheapestTickets,
      });
    }
    if (activeTab === 'Самый быстрый') {
      const fastestTickets = fastestTicketsUtil(filteredTickets, filter);
      dispatch({
        type: FASTEST_TICKETS,
        payload: fastestTickets,
      });
    }
  };

  const handleCheckBoxChange = (name) => {
    dispatch(toggleCheck(name));
    const newAllChecked = allChecked;
    let newOneChecked = oneChecked;
    let newTwoChecked = twoChecked;
    let newThreeChecked = threeChecked;
    let newFourChecked = fourChecked;

    switch (name) {
      case 'oneChecked':
        newOneChecked = !oneChecked;
        break;
      case 'twoChecked':
        newTwoChecked = !twoChecked;
        break;
      case 'threeChecked':
        newThreeChecked = !threeChecked;
        break;
      case 'fourChecked':
        newFourChecked = !fourChecked;
        break;
      default:
        break;
    }
    const allTickets = [...tickets];
    const sortedTickets = filterTicketsUtil(
      allTickets,
      newAllChecked,
      newOneChecked,
      newTwoChecked,
      newThreeChecked,
      newFourChecked
    );
    dispatch({ type: FILTER_TICKET, payload: sortedTickets });

    if (activeTab === 'Самый дешёвый') {
      const cheapestTickets = cheapestTicketsUtil(sortedTickets, filter);
      dispatch(setActiveTab(cheapest));
      dispatch({
        type: CHEAPEST_TICKETS,
        payload: cheapestTickets,
      });
    }
    if (activeTab === 'Самый быстрый') {
      const fastestTickets = fastestTicketsUtil(sortedTickets, filter);
      dispatch(setActiveTab(fastest));
      dispatch({
        type: FASTEST_TICKETS,
        payload: fastestTickets,
      });
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
