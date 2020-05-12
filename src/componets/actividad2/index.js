import React, { useEffect, useState } from "react";
import { getData } from "data";
import Table from "./tabla";


const ListP = () => {
  const [products, setProducts] = useState({
    data: [],
    error: null,
    loading: false,
  });
  const { data, loading, error } = products;
  useEffect(() => {
    getData({ setProducts });
  }, []);

  if (loading) return <p>...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Table data = {data}/>
  )
};
export default ListP;
