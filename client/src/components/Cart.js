import { useSelector } from "react-redux"

function Cart() {
    const userValidate = useSelector((state) => state.userauth)

    return (
        <div className="Cart">
            
        </div>
    )
}

export default Cart