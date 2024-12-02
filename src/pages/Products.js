import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
const Product = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
      const fetchProducts = async () => {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
      };

      fetchProducts();
  }, []);
  return (
    <div>
		{/* <!-- Start Hero Section --> */}
		<div class="hero">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-lg-5">
						<div class="intro-excerpt">
							<h1>Shop</h1>
						</div>
					</div>
					<div class="col-lg-7">
					</div>
				</div>
			</div>
		</div>
	{/* <!-- End Hero Section --> */}
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className='product-img'/>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
			      <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;