import './checkout-item.styles.scss';

import Button from '../button/button.component';

const CheckoutItem = ({ item }) => {
  const changeQuantity = (quantity) => {};

  return (
    <div>
      <h2>{item.name}</h2>
      <div style={{ display: 'flex' }}>
        <Button onClick={() => changeQuantity(-1)}>{'<'}</Button>
        <span>{item.quantity}</span>
        <Button onClick={() => changeQuantity(1)}>{'>'}</Button>
      </div>
    </div>
  );
};

export default CheckoutItem;
