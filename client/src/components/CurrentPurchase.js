
function CurrentPurchase() {
    return (
        <div className="CurrentPurchase">
            <table>
                <thead>
                    <th>Product</th>
                    <th>Price <i class="fas fa-dollar-sign"></i></th>
                    <th>Amount</th>
                    <th className="SubtotalColumn">Subtotal <i class="fas fa-dollar-sign"></i></th>
                </thead>
                <tbody>
                    <tr>
                        <td>Product one</td>
                        <td><i class="fas fa-dollar-sign"></i> 25</td>
                        <td>3</td>
                        <td><i class="fas fa-dollar-sign"></i> 75</td>
                    </tr>
                    <tr>
                        <td>Product two</td>
                        <td><i class="fas fa-dollar-sign"></i> 34</td>
                        <td>2</td>
                        <td><i class="fas fa-dollar-sign"></i> 68</td>
                    </tr>
                </tbody>
            </table>
            <hr/>
            <div className="DisplayRow">
                <div>
                    <button className="Pay">To pay <i class="fas fa-money-bill-wave"></i></button>
                    <button className="Cancel"><i class="fas fa-window-close"></i></button>
                </div>
                <div className="TotalAmount">
                    <h3>Subtotal: <i class="fas fa-dollar-sign"></i> 143</h3>
                    <hr/>
                    <h2>Total</h2>
                    <h2><i class="fas fa-dollar-sign"></i> 143</h2>
                </div>
            </div>    
        </div>
    )
}

export default CurrentPurchase