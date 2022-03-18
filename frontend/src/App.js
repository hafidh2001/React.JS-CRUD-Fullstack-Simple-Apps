// import module with object literal {}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // routes(react-router-dom v6) = switch

// import component
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ShowProduct from "./components/ShowProduct";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route exact path="/" element={<ProductList />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/:id/edit" element={<EditProduct />} />
              <Route path="/:id" element={<ShowProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
