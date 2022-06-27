import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlide";
import { closeModal } from "../features/modal/modal-slide";

const Modal = () => {
    const dispatch = useDispatch();
    console.log(dispatch);
    return (
        <div className="fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
            <div className="">
                <div className="bg-white rounded-md p-4 shadow-md">
                    <h4>Remove all items from your shopping cart?</h4>
                    <div className="mt-8 mb-0">
                        <button
                            type="button"
                            className="w-24 bg-red-500 text-white py-2 rounded-md"
                            onClick={() => {
                                dispatch(clearCart());
                                dispatch(closeModal());
                            }}
                        >
                            Confirm
                        </button>
                        <button
                            type="button"
                            className="py-2 w-24 rounded-md bg-slate-300 ml-2"
                            onClick={() => {
                                dispatch(closeModal());
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
