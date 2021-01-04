import React from "react";
import ItemCount from "./ItemCount";


export default function ItemListContainer ({greeting}) {
    let onAddToCart = (quantity, stock)=>{
        stock < 1 ? alert("no hay stock disponible de este producto!") : alert("se agrego "+quantity+" producto al carrito")

    }
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={onAddToCart}/>
        </div> 
    )
}