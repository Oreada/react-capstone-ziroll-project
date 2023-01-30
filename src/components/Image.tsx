import { useState } from "react";
import { ImageProps } from "../types/types";
import { ContextConsumer } from "../context";

export function Image({ className, img }: ImageProps) {
	const [hovered, setHovered] = useState(false);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	// const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
	// const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

	return (
		<ContextConsumer>
			{(context) => (
				<div
					className={`${className} image-container`}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<img src={img.url} className="image-grid" alt="Something" />
					{img.isFavorite && <i className="ri-heart-fill favorite" onClick={() => context.toggleFavorite(img.id)}></i>}
					{hovered && <i className="ri-heart-line favorite" onClick={() => context.toggleFavorite(img.id)}></i>}
					{hovered && <i className="ri-add-circle-line cart"></i>}
				</div>)}
		</ContextConsumer>
	)
}
