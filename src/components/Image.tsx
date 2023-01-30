import { useState } from "react";
import { ImageProps, Photo } from "../types/types";
import { ContextConsumer } from "../context";

export function Image({ className, img }: ImageProps) {
	const [hovered, setHovered] = useState(false);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	const isInCart = (idPhoto: string, cartItems: Array<Photo>) => {
		return cartItems.some((item) => item.id === idPhoto);
	};

	return (
		<ContextConsumer>
			{(context) => (
				<div
					className={`${className} image-container`}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<img src={img.url} className="image-grid" alt="Something" />
					{img.isFavorite ?
						<i className="ri-heart-fill favorite" onClick={() => context.toggleFavorite(img.id)}></i> :
						hovered ?
							<i className="ri-heart-line favorite" onClick={() => context.toggleFavorite(img.id)}></i> :
							null}

					{isInCart(img.id, context.cartItems) ?
						<i className="ri-shopping-cart-fill cart" onClick={() => context.addPhotoToCart(img)}></i> :
						hovered ?
							<i className="ri-add-circle-line cart" onClick={() => context.addPhotoToCart(img)}></i> :
							null}
				</div>)
			}
		</ContextConsumer >
	)
}
