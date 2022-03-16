import "./Added.css";

const Added = ({ title, image, price, rating }) => {
  return (
    <div className="addedProduct">
      <img className="addedProduct__image" src={image} alt="" />

      <div className="addedProduct__info">
        <p className="addedProduct__title">{title}</p>
        <p className="addedProduct__price">
          <small>$</small>
          <strong>{price.toFixed(2)}</strong>
        </p>
        <div className="addedProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Added;
