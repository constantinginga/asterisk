import {
  CartItemContainer,
  ItemDetails,
  Name,
  ItemImage,
} from './cart-item.styles';

const CartItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={name} />
      <ItemDetails className="item-details">
        <Name className="name">{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
