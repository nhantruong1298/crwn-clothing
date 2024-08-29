import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      {/* <div className='cart-items'>
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div> */}
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
