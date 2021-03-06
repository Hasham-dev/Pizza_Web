import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SunspotLoader } from "react-awesome-loaders";

export const ProductContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;
export const ProductImg = styled(LazyLoadImage)`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 7px #fdc500;
  
`;
export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  font-weight: 600;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #ffc598;
    color: #000;
    cursor: pointer;
  }
`;

export const ProductTitle = styled.h2`
  font-weight: 300 !important;
  font-size: 1.5rem;
`;

export const Loader = styled(SunspotLoader)`
  height: 100vh;
  width: 100vh;
  margin: 0 auto;
  transform: translate(0, 35vh);
`;
