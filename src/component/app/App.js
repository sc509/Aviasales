import Logo from '../logo/logo';
import Filter from '../filter/filter';
import Tabs from '../tabs/tabs';
import TicketList from '../ticket-list/ticket-list';
import Loader from '../loader/loader';

import styles from './App.module.scss';

function App() {
  const { aviasales, aviasalesHeader, aviasalesMain, aviasalesMainLeft, aviasalesMainRight, aviasalesMainRightLoader } =
    styles;
  return (
    <div className={aviasales}>
      <header className={aviasalesHeader}>
        <Logo />
      </header>
      <main className={aviasalesMain}>
        <div className={aviasalesMainLeft}>
          <Filter />
        </div>
        <div className={aviasalesMainRight}>
          <Tabs />
          <div className={aviasalesMainRightLoader}>
            <Loader />
          </div>
          <TicketList />
        </div>
      </main>
    </div>
  );
}

export default App;
