import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Cart from "./component/Cart";
import Home from "./page/home/Home";
import ProductDetails from "./page/product-details/ProductDetails";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import { store } from "./redux/store";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    if (!localStorage.getItem('cartList')) {
      localStorage.setItem('cartList', null);
    }
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Cart />
        <div className="mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:name" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
