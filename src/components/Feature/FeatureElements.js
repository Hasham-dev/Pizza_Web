import styled from "styled-components";
import FeaturedPic from "../../Images/featired.jpg";

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturedPic});
  height: 100vh;
  background-size: cover;
  max-height: 500px;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  color: #fff;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 2rem);
  }
`;

export const FeaturedButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-in-out;
  }
`;
