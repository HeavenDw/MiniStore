import React, { ChangeEvent, useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeLimit } from '../../Redux/slices/productsSlice';

const Select = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeLimit('5'));
  }, []);

  function setLimit(limit: string) {
    dispatch(changeLimit(limit));
  }

  return (
    <div className="container px-5 pt-5 mx-auto flex gap-5 mb-5">
      <p className="font-bold">How many products to show: </p>
      <select
        className="cursor-pointer border"
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setLimit(e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  );
};

export default Select;
