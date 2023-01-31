import {
  ShippingMethodContainer,
  LogoContainer,
  UPSLogo,
  DetailsContainer,
  PriceContainer,
  DeliveryTime,
} from './shipping-method.styles';

const ShippingMethod = () => {
  return (
    <ShippingMethodContainer>
      <LogoContainer>
        <UPSLogo />
      </LogoContainer>
      <DetailsContainer>
        <p>FedEx Delivery</p>
        <DeliveryTime>3-5 business days</DeliveryTime>
      </DetailsContainer>
      <PriceContainer>
        <label htmlFor="shipping">Free</label>
        <input
          type="radio"
          name="shipping"
          id="shipping"
          checked={true}
          readOnly={true}
        />
      </PriceContainer>
    </ShippingMethodContainer>
  );
};

export default ShippingMethod;
