import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchProducts } from '../../Redux/slices/productsSlice';

const Navigation = () => {
  const dispatch = useAppDispatch();

  const { limit } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(limit));
  }, [limit]);

  return (
    <nav className="h-[50px] flex justify-between px-5 bg-zinc-900 items-center text-white">
      <Link to="/" className="font-bold text-lg">
        Mini store
      </Link>
      <ul className="flex gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
