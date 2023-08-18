import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import cheapestTicketsUtil from '../../Utilities/cheapestTicketsUtil';
import fastestTicketsUtil from '../../Utilities/fastestTicketsUtil';
import { setActiveTab } from '../../redux/actions';

import styles from './tabs.module.scss';

function Tabs() {
  const cheapest = 'Самый дешёвый';
  const fastest = 'Самый быстрый';
  const dispatch = useDispatch();
  const [activeTab, setActiveTabs] = useState();
  const handleCheapestTab = () => {
    setActiveTabs(cheapest);
    dispatch(setActiveTab(cheapest));
    dispatch(cheapestTicketsUtil());
  };
  const handleFastestTab = () => {
    setActiveTabs(fastest);
    dispatch(setActiveTab(fastest));
    dispatch(fastestTicketsUtil());
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
