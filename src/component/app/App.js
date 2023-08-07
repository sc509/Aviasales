import Logo from "../logo/logo";
import Filter from "../filter/filter";
import Tabs from "../tabs/tabs";
import TicketList from "../ticket-list/ticket-list";
import ShowMore from "../show-more/show-more";
import styles from "./App.module.scss";
import Loader from "../loader/loader";

function App() {
    return (
        <div className={styles.aviasales}>
            <header className={styles.aviasalesHeader}>
                <Logo/>
            </header>
            <main className={styles.aviasalesMain}>
                <div className={styles.aviasalesMainLeft}>
                    <Filter/>
                </div>
                <div className={styles.aviasalesMainRight}>
                    <Tabs/>
                    <div className={styles.aviasalesMainRightLoader}>
                        <Loader/>
                    </div>
                    <TicketList/>
                </div>
            </main>
            <footer className={styles.aviasalesFooter}>
                <ShowMore/>
            </footer>
        </div>
    );
}

export default App;