const initialdata = {
  productdata: [],
};

const basicReducer = (storedata = initialdata, action) => {
  if (action.type === "products") {
    return {
      productdata: action.payload,
    };
  }
  return storedata;
};

export default basicReducer;
