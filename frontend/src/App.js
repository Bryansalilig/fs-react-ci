import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Login from "./auth/Login";
import Register from "./auth/Register";
function App() {
  return (
    <Router>
    <div className="container">
      <Routes>
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/" element={ <ProductList /> } />
        <Route path="/add" element={ <AddProduct />} />
         <Route path="/edit/:id" element={ <EditProduct/> } />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
