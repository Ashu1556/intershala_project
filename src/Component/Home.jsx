import React, { useEffect } from "react";
import myStore from "./Redux/store";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((storedata) => {
    return storedata.productdata;
  });
  console.log(products);

  const fetchdata = async () => {
    const data = await fetch(
      `https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10`
    );
    const data1 = await data.json();
    myStore.dispatch({
      type: "products",
      payload: data1.data,
    });

    console.log(data1);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return <></>;
};

export default Home;
