import companyLogo from '../assets/S7 Logo.png'
import "./ticket-list-item.scss"
import TicketData from "../ticket-data/ticket-data";

function TicketListItem() {
    return (
        <div className="ticket">
            <div className="ticket__booking-info">
                <div className="ticket__price">
                    <span>13400 Р</span>
                </div>
                <div className="ticket__company-name">
                    <img src={companyLogo} alt="Logo Company"/>
                </div>
            </div>
            <TicketData/>
            <TicketData/>

        </div>
    )
}

export default TicketListItem;