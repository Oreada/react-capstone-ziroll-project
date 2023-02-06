import { CartItemProps } from "../types/types";
import { ContextConsumer } from "../context";
import { PRICE } from "../constants/constants";
import { useHover } from "../hooks/useHover";

export function CartItem({ photo }: CartItemProps) {
	const { hovered, myRef } = useHover();
	const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

	return (
		<ContextConsumer>
			{(context) => (
				<div className="cart-item">
					<i className={iconClassName}
						onClick={() => context.removePhotoFromCart(photo.id)}
						ref={myRef}
					>
					</i>
					<img src={photo.url} width="130px" alt="Something" />
					<p className="cart-price">{`$${PRICE}`}</p>
				</div>
			)}
		</ContextConsumer >
	)
}
