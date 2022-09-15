import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { EProductsSliceStatus } from '../../models';

import styles from './SingleProduct.module.css';

const SingleProduct: FC = () => {
  const { status } = useAppSelector((state) => state.products);

  const { id } = useParams();

  const fullProduct = useAppSelector((state) =>
    state.products.products.filter((product) => product.id === Number(id)),
  )[0];

  if (status === EProductsSliceStatus.Error) {
    return <div className="container mx-auto pt-5">{status}</div>;
  }

  if (status === EProductsSliceStatus.Loading) {
    return <div className="container mx-auto pt-5">Loading...</div>;
  }

  return (
    <div className={styles.singleProduct}>
      <img className={styles.img} src={fullProduct.image} alt={fullProduct.title} />
      <div className={styles.info}>
        <h3 className={styles.title}>{fullProduct.title}</h3>
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

export default SingleProduct;
