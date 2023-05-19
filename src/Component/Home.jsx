import React, { useEffect } from "react";
import myStore from "./Redux/store";
import { useSelector } from "react-redux";
import "./home.css";

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

  return (
    <div className="container">
      <div className="home_container">
        {products.map((ele) => {
          return (
            <div key={ele.id} className="home_container1">
              <div style={{ width: "100%", height: "50%" }}>
                <img
                  src={ele.thumb}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
              <div
                style={{
                  width: "100%",
                  height: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  paddingLeft: "20px",
                }}
              >
                <h2>{ele.title}</h2>
                <p> {ele.primary_category.name}</p>
                <p style={{}}>{ele.short_description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
