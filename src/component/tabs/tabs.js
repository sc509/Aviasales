import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { cheapestTickets, fastestTickets } from '../../redux/actions';

import styles from './tabs.module.scss';

function Tabs() {
  const cheapest = 'Самый дешёвый';
  const fastest = 'Самый быстрый';
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState();
  const handleCheapestTab = () => {
    setActiveTab(cheapest);
    dispatch(cheapestTickets());
  };
  const handleFastestTab = () => {
    setActiveTab(fastest);
    dispatch(fastestTickets());
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
