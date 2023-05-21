import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./navbar.css";

const InputData = () => {
  const [input, setInput] = useState("");
  const [filteredData, setfilteredData] = useState([]);

  const product = useSelector((storedata) => {
    return storedata.productdata;
  });

  useEffect(() => {
    const data = product.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setfilteredData(data);
    console.log(data);
  }, [input, product]);

  return (
    <div className="container">
      <div className="container1">
        <h1 className="text">All Articles</h1>

        <input
          className="inputfield"
          type="text"
          placeholder="Search articles"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="home_container">
        {filteredData.map((ele) => {
          return (
            <div key={ele.id} className="home_container1">
              <div
                className="hovereffect"
                style={{ width: "100%", height: "50%", borderRadius: "16px" }}
              >
                <img
                  src={ele.thumb}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  className="imageradius"
                  alt=""
                />
                <div className="overlay">
                  <div className="text8">
                    <div>
                      <img
                        src={ele.thumb}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        className="imageradius"
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "50px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        paddingLeft: "20px",
                      }}
                    >
                      <h2>{ele.title}</h2>

                      <p> {ele.primary_category.name}</p>
                      <p>{ele.short_description}</p>
                    </div>
                  </div>
                </div>
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
                <p>{ele.short_description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputData;
