import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Layout from "./components/layout/Layout";
import Carts from "./pages/Carts";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/CheckOut";
import Paypal from "./components/Payple";


function App() {
  return (
	<BrowserRouter>
    <CartProvider>
		<Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/check-out" element={<Checkout/>}/> 
        <Route path="/payple" element={<Paypal/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </CartProvider>
	</BrowserRouter>
  );
}

export default App;
