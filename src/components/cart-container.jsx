import React from "react";
import CartItem from "./cart-item";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modal-slide";
const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    if (amount < 1) {
        return (
            <section className="text-center my-8 w-[85%] md:w-4/6 mx-auto">
                <header>
                    <h2 className="font-semibold md:text-2xl duration-500 text-xl my-4">Your Bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className="text-center my-8 w-[85%] md:w-4/6 mx-auto">
            <header>
                <h2 className="font-semibold md:text-2xl duration-500 text-xl my-4">Your Bag</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            <footer>
                <hr />
                <div className="flex justify-end mx-5">
                    <h4>
                        total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button className="border-2 border-black py-3 px-5 md:hover:bg-black md:hover:text-white"
                    onClick={() => {
                        dispatch(openModal());

                    }}
                >Clear Cart</button>
            </footer>
        </section>
    );
};

export default CartContainer;
