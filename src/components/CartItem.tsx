import { Photo } from "../types/types";

interface CartItemProps {
	photo: Photo;
}

export function CartItem({ photo }: CartItemProps) {
	return (
		<div className="cart-item">
			<i className="ri-delete-bin-line"></i>
			<img src={photo.url} width="130px" alt="Something" />
			<p>$5.99</p>
		</div>
	)
}
