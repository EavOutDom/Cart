import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/cart-container";
import Modal from "./components/modal";
import Navbar from "./components/navbar";
import { calculateTotals, getItems } from "./features/cart/cartSlide";

const App = () => {
    const { cartItems, isLoading } = useSelector((state) => state.cart);
    const { isOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems, dispatch]);
    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);
    if (isLoading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        );
    }
    return (
        <div>
            {isOpen && <Modal />}
            <Navbar />
            <CartContainer />
        </div>
    );
};
export default App;
