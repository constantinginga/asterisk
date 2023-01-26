import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    margin: 10px 0;
    gap: 10px;
  }
`;
