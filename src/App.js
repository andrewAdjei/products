
import ProductHome from "./feature/product/ProductHome";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddProduct from "./feature/product/AddProduct";
import UpdateProduct from "./feature/product/UpdateProduct";


function App() {
  return (
      <main className="App">
          <Router>
             <Routes>
                 <Route path="/" element={<ProductHome />} />
                 <Route path="/create" element={<AddProduct />} />
                 <Route path="/update/:id" element={<UpdateProduct />} />
             </Routes>
          </Router>
      </main>
  );
}

export default App;
