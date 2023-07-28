function TicketData() {
    return (
        <div className="ticket__data">
            <div className="ticket__data-route">
                <span className="ticket__allocated">MOW - HKT</span>
                <span>10:45 - 08:00</span>
            </div>
            <div className="ticket__data-en-route">
                <span className="ticket__allocated">В пути</span>
                <span>21ч 15м</span>
            </div>
            <div className="ticket__data-transplants">
                <span className="ticket__allocated">2 пересадки</span>
                <span>HKG, JNB</span>
            </div>
        </div>
    );
}

export default TicketData;