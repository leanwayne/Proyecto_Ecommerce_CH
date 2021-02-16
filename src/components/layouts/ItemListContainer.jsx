import React from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ greeting, items }) {
  const { categoryId } = useParams();

  return (
    <div>
      <div className="row">
        <img
          className="col s12"
          src="https://dslv9ilpbe7p1.cloudfront.net/bWzwSynMqg6NTkRQV1g7yg_store_banner_image.png"
          alt=""
        />
        <h1 className="center-align">{greeting}</h1>
        {!items.length ? (
          <>
            <h2>Loading...</h2>
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue-only">
                <div Name="circle-clipper left">
                  <div className="circle"></div>
                </div>
                <div Name="gap-patch">
                  <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <ItemList
            items={
              categoryId
                ? items.filter((item) => item.categoryId === categoryId)
                : items
            }
          />
        )}
      </div>
    </div>
  );
}
