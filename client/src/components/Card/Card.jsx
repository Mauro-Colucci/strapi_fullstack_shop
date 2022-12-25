import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={import.meta.env.VITE_UPLOAD_URL + item.attributes.img.data.attributes.url}
            alt=""
            className="mainImg"
          />
          <img
            src={import.meta.env.VITE_UPLOAD_URL + item.attributes.img2.data.attributes.url}
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <span>${item?.attributes.oldPrice || item?.attributes.price * 1.25}</span>
          <span>${item?.attributes.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
