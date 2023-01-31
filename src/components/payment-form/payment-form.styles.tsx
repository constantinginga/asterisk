import styled from 'styled-components';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

export const PaymentFormContainer = styled.div`
  // height: 300px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

export const ShippingInput = styled(FormInput)`
  margin: 0;
`;

export const TotalAmount = styled.div`
  font-weight: 600;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

export const ShippingDetails = styled.div`
  margin-top: 2rem;

  h4 {
    margin-bottom: 0.5rem;
  }
`;
