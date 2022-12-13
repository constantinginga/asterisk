import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className="cart-dropdown-container">
    <div className="cart-items" />
    <Button>Go to checkout</Button>
  </div>
);

export default CartDropdown;
