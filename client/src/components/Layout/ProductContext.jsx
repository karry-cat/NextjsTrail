"use client";

import {useState} from "react";

const {createContext, useContext} = require("react");
const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    // console.log("product context works")
    const [cartItems, setCartItems] = useState([]);
    const addProductToCart = (newProduct) => {
        setCartItems((prevProducts) => [...prevProducts, newProduct]);
    }
    const removeProductFromCart = (productId) => {
        setCartItems((prevProducts) => prevProducts.filter((product) => product.id != productId));
    }

    return <ProductContext.Provider value={{cartItems, addProductToCart, removeProductFromCart, setCartItems}}>
        {children}
    </ProductContext.Provider>
};

export const useProductContext = () => {
    return useContext(ProductContext);
}