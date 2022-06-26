import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlide";
import modalReducer from "./features/modal/modal-slide";
const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
