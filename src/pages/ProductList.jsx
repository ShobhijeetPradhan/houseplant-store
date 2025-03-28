import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const plants = [
  { id: 1, name: "Snake Plant", price: 20, category: "Low Light", image: "/snake-plant.jpg" },
  { id: 2, name: "Aloe Vera", price: 15, category: "Succulents", image: "/aloe.jpg" },
  { id: 3, name: "Fiddle Leaf Fig", price: 30, category: "Large Plants", image: "/fig.jpg" },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Houseplants</h2>
      {plants.map((plant) => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
