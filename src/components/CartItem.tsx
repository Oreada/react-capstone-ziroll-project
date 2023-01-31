import { CartItemProps } from "../types/types";
import { ContextConsumer } from "../context";
import { PRICE } from "../constants/constants";
import { useState } from "react";

export function CartItem({ photo }: CartItemProps) {
	const [hovered, setHovered] = useState(false);
	const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	return (
		<ContextConsumer>
			{(context) => (
				<div className="cart-item">
					<i className={iconClassName}
						onClick={() => context.removePhotoFromCart(photo.id)}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
					</i>
					<img src={photo.url} width="130px" alt="Something" />
					<p>{`$${PRICE}`}</p>
				</div>
			)
			}
		</ContextConsumer >
	)
}
