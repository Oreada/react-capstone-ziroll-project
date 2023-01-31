import { CartItemProps } from "../types/types";
import { ContextConsumer } from "../context";

export function CartItem({ photo }: CartItemProps) {
	return (
		<ContextConsumer>
			{(context) => (
				<div className="cart-item">
					<i className="ri-delete-bin-line" onClick={() => context.removePhotoFromCart(photo.id)}></i>
					<img src={photo.url} width="130px" alt="Something" />
					<p>$5.99</p>
				</div>
			)}
		</ContextConsumer>
	)
}
