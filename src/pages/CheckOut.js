import React, {useContext} from 'react';
import { Link } from 'react-router';
import { CartContext } from '../context/CartContext';
import PayPal from '../components/Payple';

function Checkout() {
	const { cart } = useContext(CartContext);
    const totalPrice = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toFixed(2);
    return (
        <div>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Checkout</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            {/* Additional content can be added here */}
                        </div>
                    </div>
                </div>
            </div>

			<div class="untree_co-section">

					<div class="row mb-5">
						<div class="col-md-12">
						<h2 class="h3 mb-3 text-black">Your Order</h2>
						<div class="p-3 p-lg-5 border bg-white w-50 m-5">
							<table class="table site-block-order-table mb-5 ">
							<thead>
								<th>Product</th>
								<th>Total</th>
							</thead>
							<tbody >
								{cart.map((item) => (
									<tr key={item.id}>
									<td>{item.title} <strong class="mx-2">x</strong> 1</td>
									<td>${item.price.toFixed(2)}</td>
									</tr>
								))}
							</tbody>
							</table>

							<div class="border p-3 mb-3">
							<h3 class="h6 mb-0"><a class="d-block" data-bs-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Direct Bank Transfer</a></h3>

							<div class="collapse" id="collapsebank">
								<div class="py-2">
								<p class="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
								</div>
							</div>
							</div>

							<div class="border p-3 mb-3">
							<h3 class="h6 mb-0"><a class="d-block" data-bs-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">Cheque Payment</a></h3>

							<div class="collapse" id="collapsecheque">
								<div class="py-2">
								<p class="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
								</div>
							</div>
							</div>

							<div class="border p-3 mb-5">
							<h3 class="h6 mb-0"><a class="d-block" data-bs-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">Paypal</a></h3>

							<div class="collapse" id="collapsepaypal">
								<div class="py-2">
								<p class="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
								</div>
							</div>
							</div>

							<div class="form-group">
							<Link to='/payple'>
								<button class="btn btn-black btn-lg py-3 btn-block w-75"> <PayPal/> Place Order</button>
						    </Link>
							</div>

						</div>
						</div>
					</div>
				</div>

			</div>
    );
}

export default Checkout;