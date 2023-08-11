import styles from "./tabs.module.scss";
import {useDispatch } from "react-redux";
import {cheapestTickets, fastestTickets} from "../../redux/actions";
import React, { useState } from 'react';

function Tabs(){
    const cheapest = "Самый дешёвый";
    const fastest = "Самый быстрый";
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState()
    const handleCheapestTab = () => {
        setActiveTab(cheapest);
        dispatch(cheapestTickets())
    }
    const handleFastestTab = () => {
        setActiveTab(fastest)
        dispatch(fastestTickets())
    }
    const {aviasales__tabs,aviasales__tabsCheapest,aviasales__tabsFastest, aviasales__tabsActive } = styles;
    return (
        <section className={aviasales__tabs}>
            <button
                className={`${aviasales__tabsCheapest} ${activeTab === cheapest ? aviasales__tabsActive : ''}`}
                onClick={handleCheapestTab}
            >
                {cheapest.toUpperCase()}
            </button>
            <button
                className={`${aviasales__tabsFastest} ${activeTab === fastest ? aviasales__tabsActive : ''}`}
                onClick={handleFastestTab}
            >
                {fastest.toUpperCase()}
            </button>
        </section>
    );

}

export default Tabs;