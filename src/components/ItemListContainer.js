import React, {useState} from "react";
import ItemCount from "./ItemCount";


export default function ItemListContainer ({greeting}) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock={5} quantityState={[quantity, setQuantity]} />
        </div> 
    )
}