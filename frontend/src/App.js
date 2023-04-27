import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
function App() {
  return (
    <Router>
    <div className="container">
      <Routes>
        <Route path="/" element={ <ProductList /> } />
        <Route path="/add" element={ <AddProduct />} />
         
      </Routes>
    </div>
  </Router>
  );
}

export default App;
