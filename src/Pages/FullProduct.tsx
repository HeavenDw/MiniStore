import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks';

const FullProduct: FC = () => {
  const { id } = useParams();

  const products = useAppSelector((state) =>
    state.products.products.filter((product) => product.id === Number(id)),
  );

  const fullProduct = products[0];

  return (
    <div className="container pt-5 mx-auto flex">
      <img className="flex basis-1/2" src={fullProduct.image} alt={fullProduct.title} />
      <div className="flex-col basis-1/2">
        <h3 className="font-bold text-xl">{fullProduct.title}</h3>
        <div>Category: {fullProduct.category}</div>
        <p>Price: {fullProduct.price}$</p>
        <p>Description: </p>
        <p>{fullProduct.description}</p>
        <div>
          Rating: <span>{fullProduct.rating.rate}</span>
        </div>
      </div>
    </div>
  );
};

export default FullProduct;
