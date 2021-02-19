import React from "react";
import {
  ProductButton,
  ProductCard,
  ProductContainer,
  ProductDesc,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductsHeading,
  ProductWrapper,
  ProductTitle,
} from "./ProductsElement";

const Products = ({ heading, data }) => {
  return (
    <ProductContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Products;
