import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ProductListing from "./pages/product-listing";
import ProductDetails from "./pages/product-details";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>E-Commerce Store</h1>

        {/* breadcrumbs */}
        <Breadcrumbs/>

        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
