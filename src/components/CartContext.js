import React, { useState} from 'react'


export const CartContext = React.createContext();

function CartProvider( { children }) {
    const [ cart, setCart ] = useState([])
    function isInCart(id,size,color){
        return !!cart.find(p => p.item.id === id && p.color === color && p.size === size)
    };

    function addToCart(item, quantity, id, size, color) {   
        if (isInCart(id,color,size)){
            const oldProduct = cart.find(p => p.item.id === id)
            const newQuantity = oldProduct.quantity + quantity
            const newProduct = {item:{id: oldProduct.item.id, title: oldProduct.item.title, image: oldProduct.item.image, price: oldProduct.item.price, stock: item.stock,}, quantity: newQuantity, color:color, size:size}
            const cartWithoutOld = cart.filter(p => p.item.id !== id)
            const cartWithNew = [...cartWithoutOld, newProduct]
            setCart(cartWithNew)
            console.log("newproduct",newProduct)
        } else {
            const newItem = {item:{id: item.id, title: item.title, image: item.pictureUrl, price: item.price, stock: item.stock}
            , quantity: quantity, color:color, size:size}
            setCart([...cart, newItem])
        }   
    }

    function eliminateFromCart(id){
        const newCart = cart.filter(p => p.item.id !== id)
        setCart(newCart)
    }

    function clearCart(){
        setCart([])   
    }
    return (
         <CartContext.Provider value ={{ cart, addToCart, eliminateFromCart, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}
export default CartProvider;