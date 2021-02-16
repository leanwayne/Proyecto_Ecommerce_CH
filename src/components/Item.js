import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div className="col s3 ">
      <div className="card hoverable">
        <div className="card-content N/A transparent">
          <p>{item.title}</p>
        </div>
        <div className="card-image">
          <img src={item.pictureUrl} alt="" />
        </div>
        <div className="card-content grey lighten-2">
          <p>Precio:${item.price}</p>
        </div>
        <div type="button" className="card-action grey darken-4">
          <a>
            <Link to={"/item/" + item.id}>detalles del producto</Link>
          </a>
        </div>
      </div>
    </div>
  );
}
