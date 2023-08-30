import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { filterAllChecked, filterAllUnchecked, toggleCheck } from '../../redux/actions';
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

  const sortAndDispatchTickets = () => {
    let sortedTickets = tickets;
    if (activeTab === 'Самый дешёвый') {
      sortedTickets = cheapestTicketsUtil(tickets, filter);
      dispatch({
        type: CHEAPEST_TICKETS,
        payload: sortedTickets,
      });
    } else if (activeTab === 'Самый быстрый') {
      sortedTickets = fastestTicketsUtil(tickets, filter);
      dispatch({
        type: FASTEST_TICKETS,
        payload: sortedTickets,
      });
    }
    dispatch({ type: FILTER_TICKET, payload: sortedTickets });
  };

  const handleAllCheckBoxChange = (e) => {
    const newAllChecked = e.target.checked;
    if (newAllChecked) {
      dispatch(filterAllChecked());
    } else {
      dispatch(filterAllUnchecked());
    }
    const allTickets = [...tickets];
    const filteredTickets = filterTicketsUtil(
      allTickets,
      newAllChecked,
      oneChecked,
      twoChecked,
      threeChecked,
      fourChecked
    );
    dispatch({ type: FILTER_TICKET, payload: filteredTickets });
  };

  const handleCheckBoxChange = (name) => {
    dispatch(toggleCheck(name));
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

    const sortedTickets = filterTicketsUtil(
      tickets,
      allChecked,
      newOneChecked,
      newTwoChecked,
      newThreeChecked,
      newFourChecked
    );

    dispatch({ type: FILTER_TICKET, payload: sortedTickets });
  };
  useEffect(() => {
    sortAndDispatchTickets();
  }, [filter]);

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
