import styled from 'styled-components';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media screen and (max-width: 550px) {
    min-width: 100%;
  }
`;

export const Input = styled(FormInput)``;

export const TotalAmount = styled.div`
  font-weight: 600;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const PaymentButton = styled(Button)`
  width: 100%;
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

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  margin: 1rem 0;

  ${Input} {
    margin: 0;
  }
`;
