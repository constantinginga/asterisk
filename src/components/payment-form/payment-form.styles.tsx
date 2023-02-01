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

export const Input = styled(FormInput)``;

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

  h3,
  h4 {
    margin-bottom: 0.5rem;
  }
`;

export const ShippingContainer = styled.div`
  display: flex;
  gap: 0 2rem;

  div:first-of-type {
    flex: 2;
  }

  div:last-of-type {
    flex: 1;
  }
`;

export const InputContainer = styled.div`
  margin: 1rem 0;

  ${Input} {
    margin: 0;
  }
`;
