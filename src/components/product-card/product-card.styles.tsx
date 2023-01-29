import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 1rem;
  }

  button {
    width: 80%;
    position: absolute;
    top: 255px;
    display: none;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    img {
      transition: all 0.2s ease-in-out;
    }

    button {
      display: flex;
      transition: all 0.2s ease-in-out;
    }
  }

  @media screen and (max-width: 800px) {
    button {
      display: flex;
      // opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  // width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  // width: 10%;
`;
