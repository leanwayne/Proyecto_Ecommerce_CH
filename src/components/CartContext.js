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
        const item = cart.find(p => p.id === id)
        if (item === undefined){
            return false
        }
        else {
            return true
        }
    }

    function addToCart(product, quantity, id) {
         
        if (isInCart(id)){
            const oldProduct = cart.find(p => p.id === id)
            const newQuantity = oldProduct.amount + quantity           
            const newProduct = { id: oldProduct.id, title: oldProduct.title, image: oldProduct.image, price: oldProduct.price, amount: newQuantity}
            const cartWithoutOld = cart.filter(product => product.id =! id)
            const cartWithNew = [...cartWithoutOld, newProduct]
            setCart(cartWithNew)            
        } else {
            const newItem = { id: product.id, title: product.title, image: product.pictureUrl, price: product.price, amount: quantity }
            setCart([...cart, newItem]) 
        }
    }

    function eliminateFromCart(id){
        const newCart = cart.filter(product => product.id !== id)
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