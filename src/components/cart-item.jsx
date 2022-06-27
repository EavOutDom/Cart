import React from "react";
import {BsArrowUpSquareFill, BsArrowDownSquareFill} from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlide";
const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();
    return (
        <div className="bg-[bisque] rounded-lg my-4 p-4 shadow-lg hover:md:shadow-2xl duration-500 mx-auto w-[95%] hover:md:w-full">
        <div className="flex items-center justify-between">
            <img src={img} alt={title} className={'w-20 h-20 object-cover'}/>
            <div>
                <h4 className={'font-semibold'}>{title}</h4>
                <h4 className="item-price">${price}</h4>
                {/* remove button */}
                <button
                    className=""
                    onClick={() => {
                        dispatch(removeItem(id));
                    }}
                >
                    remove
                </button>
            </div>
            <div>
                {/* increase amount */}
                <button
                    className="mt-1"
                    onClick={() => {
                        dispatch(increase({ id }));
                    }}
                >
                    <BsArrowUpSquareFill size={'20'}/>
                </button>
                {/* amount */}
                <p className="text-xl mb-1">{amount}</p>
                {/* decrease amount */}
                <button
                    className={''}
                    onClick={() => {
                        if (amount === 1) {
                            dispatch(removeItem(id));
                            return;
                        }
                        dispatch(decrease({ id }));
                    }}
                >
                    <BsArrowDownSquareFill size={'20'}/>
                </button>
            </div>
        </div>
        </div>
    );
};

export default CartItem;
