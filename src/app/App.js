import './App.scss';
import Logo from "../logo/logo";
import Filter from "../filter/filter";
import Tabs from "../tabs/tabs";
import TicketList from "../ticket-list/ticket-list";
import ShowMore from "../show-more/show-more";
import "./App.scss"
function App() {
    return (
        <div className="aviasales">
            <header className="aviasales__header">
                <Logo/>
            </header>
            <main className="aviasales__main">
                <div className="aviasales__main-left">
                    <Filter/>
                </div>
                <div className="aviasales__main-right">
                    <Tabs/>
                    <TicketList/>
                </div>
            </main>
            <footer className="aviasales__footer">
                <ShowMore/>
            </footer>
        </div>
    );
}

export default App;

