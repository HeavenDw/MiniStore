import React from 'react';
import { useAppSelector } from '../../hooks';
import { EProductsSliceStatus, IProduct } from '../../models';
import Product from '../Product/Product';

import styles from './Products.module.css';

const Products = () => {
  const { products, status } = useAppSelector((state) => state.products);

  if (status === EProductsSliceStatus.Error) {
    return <div className="container mx-auto pt-5">{status}</div>;
  }

  if (status === EProductsSliceStatus.Loading) {
    return <div className="container mx-auto pt-5">Loading...</div>;
  }

  return (
    <div className={`${styles.products} container px-5 pt-5 mx-auto mb-5 products`}>
      {products.map((product: IProduct) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
