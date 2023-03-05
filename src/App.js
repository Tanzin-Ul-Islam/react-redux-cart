import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Cart from "./component/Cart";
import Home from "./page/home/Home";
import ProductDetails from "./page/product-details/ProductDetails";
function App() {
  return (
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
  );
}

export default App;
