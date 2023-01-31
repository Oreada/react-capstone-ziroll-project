import { CartItem } from "../components/CartItem";
import { ContextConsumer } from "../context";

export function Cart() {
	return (
		<ContextConsumer>
			{(context) => (
				<main className="cart-page">
					<h2>Check out</h2>
					{context.cartItems.map((item) => (
						<CartItem key={item.id} photo={item} />
					))}
					<p className="total-cost">Total: </p>
					<div className="order-button">
						<button>Place Order</button>
					</div>
				</main>
			)}
		</ContextConsumer>
	)
}
