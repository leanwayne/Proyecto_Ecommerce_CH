import React  from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ greeting, items }) {
  const { categoryId } = useParams();

  return (
    <div className = 'row'>
      <h1><img src="https://dslv9ilpbe7p1.cloudfront.net/bWzwSynMqg6NTkRQV1g7yg_store_banner_image.png" alt=""/></h1>
      <h1 className='center-align'>{greeting}</h1>
      <div className = 'col s4'>
      {!items.length ? (
        <h2>Loading...</h2>
      ) : (
        <ItemList
          items={categoryId ? items.filter((item) => item.categoryId === categoryId) : items}
        />
      )}
    </div>
    </div>
  );
}
