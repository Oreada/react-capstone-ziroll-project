import { useState } from "react";
import { ImageProps } from "../types/types";

export function Image({ className, imgUrl }: ImageProps) {
	const [hovered, setHovered] = useState(false);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
	const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

	console.log('hovered=', hovered);

	return (
		<div
			className={`${className} image-container`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<img src={imgUrl} className="image-grid" alt="Something" />
			{heartIcon}
			{cartIcon}
		</div>
	)
}
