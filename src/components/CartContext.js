import React, { useState, useEffect } from 'react'


export const CartContext = React.createContext();

function CartProvider( { children }) {

    const [ cart, setCart ] = useState([])
    const [ quantity, setQuantity ] = useState(0)
    const [ total, setTotal ] = useState()


    useEffect(() => {
        var t = 0
        const totals = cart.map( p => p.price * p.amount)
        totals.map( p => t = t + p)
        setTotal(t)
        const cartQuantity = cart.length
        setQuantity(cartQuantity)
    }, [cart])

    function isInCart(id){
        return !!cart.find(p => p.id === id)
    }

    function addToCart(item, quantity, id) {
        
        if (isInCart(id)){
            const oldProduct = cart.find(p => p.id === id)
            const newQuantity = oldProduct.amount + quantity           
            const newProduct = { id: oldProduct.id, title: oldProduct.title, image: oldProduct.image, price: oldProduct.price, amount: newQuantity}
            const cartWithoutOld = cart.filter(item => item.id !== id)
            const cartWithNew = [...cartWithoutOld, newProduct]
            setCart(cartWithNew)  
        } else {
            const newItem = { id: item.id, title: item.title, image: item.pictureUrl, price: item.price, amount: quantity }
            setCart([...cart, newItem])
        }
        
    }

    function eliminateFromCart(id){
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }

    function clearCart(){
        setCart([])
        setQuantity(0)
    }

    return (
         <CartContext.Provider value ={{ cart, quantity, total, addToCart, eliminateFromCart, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;