import { CartItemProps } from "../types/types";
import { ContextConsumer } from "../context";
import { PRICE } from "../constants/constants";

export function CartItem({ photo }: CartItemProps) {
	return (
		<ContextConsumer>
			{(context) => (
				<div className="cart-item">
					<i className="ri-delete-bin-line" onClick={() => context.removePhotoFromCart(photo.id)}></i>
					<img src={photo.url} width="130px" alt="Something" />
					<p>{`$${PRICE}`}</p>
				</div>
			)}
		</ContextConsumer>
	)
}
