import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CHEAPEST_TICKETS, FASTEST_TICKETS } from '../../redux/types';
import cheapestTicketsUtil from '../../Utilities/cheapestTicketsUtil';
import fastestTicketsUtil from '../../Utilities/fastestTicketsUtil';
import { setActiveTab } from '../../redux/actions';

import styles from './tabs.module.scss';

function Tabs() {
  const cheapest = 'Самый дешёвый';
  const fastest = 'Самый быстрый';
  const dispatch = useDispatch();
  const [activeTab, setActiveTabs] = useState();
  const tickets = useSelector((state) => state.ticket.tickets);
  const filter = useSelector((state) => state.filter);

  const handleCheapestTab = () => {
    setActiveTabs(cheapest);
    dispatch(setActiveTab(cheapest));
    const cheapestTickets = cheapestTicketsUtil(tickets, filter);
    dispatch({
      type: CHEAPEST_TICKETS,
      payload: cheapestTickets,
    });
  };

  const handleFastestTab = () => {
    setActiveTabs(fastest);
    dispatch(setActiveTab(fastest));
    const fastestTickets = fastestTicketsUtil(tickets, filter);
    dispatch({
      type: FASTEST_TICKETS,
      payload: fastestTickets,
    });
  };

  const { aviasalesTabs, aviasalesTabsCheapest, aviasalesTabsFastest, aviasalesTabsActive } = styles;
  return (
    <section className={aviasalesTabs}>
      <button
        type="button"
        className={`${aviasalesTabsCheapest} ${activeTab === cheapest ? aviasalesTabsActive : ''}`}
        onClick={handleCheapestTab}
      >
        {cheapest.toUpperCase()}
      </button>
      <button
        type="button"
        className={`${aviasalesTabsFastest} ${activeTab === fastest ? aviasalesTabsActive : ''}`}
        onClick={handleFastestTab}
      >
        {fastest.toUpperCase()}
      </button>
    </section>
  );
}

export default Tabs;
