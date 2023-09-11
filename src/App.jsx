import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./components/Layout";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductList />} />
        {/* <Route path="details" element={<ProductDetails />} /> */}
        <Route path="details/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
