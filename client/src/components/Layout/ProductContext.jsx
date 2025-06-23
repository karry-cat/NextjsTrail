"use client";

const {createContext, useContext} = require("react");
const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    // console.log("product context works")
    return <ProductContext.Provider>{children}</ProductContext.Provider>
};

export const useProductContext = () => {
    return useContext(ProductContext);
}