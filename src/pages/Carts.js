
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router';

function Carts(){
    const { cart, removeFromCart, increaseCount, decreaseCount } = useContext(CartContext);
    // const allTitles = cart.map(item => item.title).join(', ');
    const handleCheckout = () => {
      if (cart.length === 0) {
          alert('Your cart is empty. Cannot proceed to checkout.');
          return;
      }
      // Calculate total price
      // const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
      // alert(`Checkout successful! Your total is $${totalPrice}.`);
      
    };
    return (
        <div>
              <div class="hero">
                <div class="container">
                  <div class="row justify-content-between">
                    <div class="col-lg-5">
                      <div class="intro-excerpt">
                        <h1>Cart</h1>
                      </div>
                    </div>
                    <div class="col-lg-7">
                      
                    </div>
                  </div>
                </div>
              </div>

            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
            <form className=" col-md-12 w-75 m-xl-5">
              <table className='table m-lg-5'>
                  <thead>
                    <tr>
                      <th class="product-name">Product</th>
                      <th class="product-thumbnail">Image</th>
                      <th class="product-price">Price</th>
                      <th class="product-count">Quantity</th>
                      <th class="product-remove">Remove</th>

                    </tr>
                  </thead>
                    {cart.map((item) => (
                        <tbody key={item.id} className=''>
                          <td className="product-thumbnail">
                            <img src={item.image} alt={item.title} className='img-cart'/>
                          </td>
                          <td className="product-name">
                            {item.title}
                          </td>
                          <td>${item.price.toFixed(2)}</td>
                          <td>
                            <button type="button" onClick={() => decreaseCount(item.id)}>-</button>
                              {item.count}
                            <button type="button" onClick={() => increaseCount(item.id)}>+</button>
                          </td>
                          <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </tbody>
                    ))}
                    <div className='checkout'>
                      <h2>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h2>
                      <button onClick={handleCheckout}><Link to='/check-out' className=' text-decoration-none text-white'>Proceed to Checkout</Link></button>
                    </div>
              </table>
            </form>
             )} 
              
      </div>
    )


};

export default Carts;
