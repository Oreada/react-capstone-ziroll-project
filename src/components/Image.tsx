import { ImageProps, Photo } from "../types/types";
import { ContextConsumer } from "../context";
import { useHover } from "../hooks/useHover";

export function Image({ className, img }: ImageProps) {
	// console.log('Image renders');
	const { hovered, myRef } = useHover();

	const isInCart = (idPhoto: string, cartItems: Array<Photo>) => {
		return cartItems.some((item) => item.id === idPhoto);
	};

	return (
		<ContextConsumer>
			{(context) => (
				<div
					className={`${className} image-container`}
					ref={myRef}
				>
					<img src={img.url} className="image-grid" alt="Something" />
					{img.isFavorite ?
						<i className="ri-heart-fill favorite" onClick={() => context.toggleFavorite(img.id)}></i> :
						hovered ?
							<i className="ri-heart-line favorite" onClick={() => context.toggleFavorite(img.id)}></i> :
							null}

					{isInCart(img.id, context.cartItems) ?
						<i className="ri-shopping-cart-fill cart" onClick={() => context.removePhotoFromCart(img.id)}></i> :
						hovered ?
							<i className="ri-add-circle-line cart" onClick={() => context.addPhotoToCart(img)}></i> :
							null}
				</div>)}
		</ContextConsumer >
	)
}
