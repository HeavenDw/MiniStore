import React from 'react';
import { useAppSelector } from '../../hooks';
import { EProductsSliceStatus, IProduct } from '../../models';
import Product from '../Product/Product';

const Products = () => {
  const { products, status } = useAppSelector((state) => state.products);

  if (status === EProductsSliceStatus.Error) {
    return <div className="container mx-auto pt-5">{status}</div>;
  }

  if (status === EProductsSliceStatus.Loading) {
    return <div className="container mx-auto pt-5">Loading...</div>;
  }

  return (
    <div className="container pt-5 mx-auto grid grid-cols-3 gap-10 mb-5">
      {products.map((product: IProduct) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
