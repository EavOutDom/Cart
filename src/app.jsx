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
            <div className="md:text-3xl text-xl font-semibold fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
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
