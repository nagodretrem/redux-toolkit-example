import "./Product.css";

type Props = {
  id: number;
  name: string;
  price: number;
  imgURL: string;
};

const Product: React.FC<Props> = ({ name, price, imgURL }) => {
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
