import { useState } from "react";
import { CartItem } from "../components/CartItem";
import { PRICE } from "../constants/constants";
import { ContextConsumer } from "../context";

export function Cart() {
	console.log('Cart renders');
	//* TODO: разобраться с кнопкой, текстом на ней и вообще с функцией placeOrder
	const [buttonText, setButtonText] = useState("Place Order");

	const placeOrder = () => {
		setButtonText("Ordering...");
		setTimeout(() => {
			console.log("Order placed!");
			setButtonText("Place Order");
		}, 3000);
	};

	return (
		<ContextConsumer>
			{(context) => (
				<main className="cart-page">
					<h2>Check out</h2>
					{context.cartItems.map((item) => (
						<CartItem key={item.id} photo={item} />
					))}
					<p className="total-cost">
						Total: {(context.cartItems.length * PRICE).toLocaleString("en-US", { style: "currency", currency: "USD" })}
					</p>
					{(context.cartItems.length > 0) ?
						<div className="order-button">
							<button onClick={() => { placeOrder(); context.clearCart(); }}>{buttonText}</button>
						</div> :
						<p>The cart is empty</p>
					}
				</main>
			)}
		</ContextConsumer >
	)
}
