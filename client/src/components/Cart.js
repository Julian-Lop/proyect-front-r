import { useState } from "react"
import { useSelector } from "react-redux"
import CurrentPurchase from "./CurrentPurchase"
import PurchaseMades from "./PurschaseMades"
import Reservations from "./Reservations"

function Cart() {
    const userValidate = useSelector((state) => state.userauth)
    const [section, setsection] = useState()

    const getSection = (e) => {
        setsection(e.target.name)
    }

    return (
        <div>
            <div className="Cart">
                <h1>Welcome to cart {userValidate ? userValidate.quote.Username : null}</h1>
                <div>
                    <div className="NavigationBar">
                        <button id='one' name="current" onClick={e => getSection(e)}>Current purchase</button>
                        <button id='two' name="reservations" onClick={e => getSection(e)}>Reservations </button>
                        <button id='three' name="mades" onClick={e => getSection(e)}>Purchase mades</button>
                    </div>
                    <hr/>
                    {section === 'current' ? <h2>Current Purchase</h2>: section === 'reservations'? <h2>Reservations</h2>: section === 'mades'? <h2>Purchases mades</h2> : <h2>Nothing</h2>}
                    <div className="SectionInfo">
                    {section === 'current' ? <CurrentPurchase/>: section === 'reservations'? <Reservations/>: section === 'mades'? <PurchaseMades/> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart