import React from 'react';
import { Link } from 'react-router-dom';

import { IProduct } from '../../models';

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  return (
    <Link to={`product/` + product.id}>
      <div className="border py-2 px-4 rounded flex flex-col items-center cursor-pointer hover:bg-slate-200 h-full">
        <img className="w-2/6 grow" src={product.image} alt={product.title} />
        <h3 className="text-center">{product.title}</h3>
        <p className="font-bold">Price: {product.price}$</p>
      </div>
    </Link>
  );
};

export default Product;
