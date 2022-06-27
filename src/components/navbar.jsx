import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import { FaShopify } from "react-icons/fa";
const Navbar = () => {
    const { amount } = useSelector((state) => state.cart);
    return (
        <nav className={"bg-[bisque] px-8 py-6 shadow-lg"}>
            <div className="flex w-full justify-between items-center">
                <h3 className="capitalize font-bold md:text-2xl text-xl duration-500">
                    redux toolkit.
                </h3>
                <div className="block relative">
                    <FaShopify className={'md:text-[40px] text-[30px] duration-500'} />
                    <div
                        className="absolute flex justify-center items-center bg-gray-500 rounded-full 
                    top-[-0.6rem] left-[1.2rem] w-[1.75rem] h-[1.75rem]"
                    >
                        <p className="text-white mb-0 ">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
