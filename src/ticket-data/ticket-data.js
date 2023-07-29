import styles from "../ticket-list-item/ticket-list-item.module.scss";

function TicketData() {
    return (
        <div className={styles.ticket__data}>
            <div className={styles.ticket__dataRoute}>
                <span className={styles.ticket__allocated}>MOW - HKT</span>
                <span>10:45 - 08:00</span>
            </div>
            <div className={styles.ticket__dataEnRoute}>
                <span className={styles.ticket__allocated}>В пути</span>
                <span>21ч 15м</span>
            </div>
            <div className={styles.ticket__dataTransplants}>
                <span className={styles.ticket__allocated}>2 пересадки</span>
                <span>HKG, JNB</span>
            </div>
        </div>
    );
}

export default TicketData;