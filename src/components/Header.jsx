import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header>
      <Link to="/products">Shop</Link>
      <Link to="/cart">Cart ({cartQuantity})</Link>
    </header>
  );
};

export default Header;
