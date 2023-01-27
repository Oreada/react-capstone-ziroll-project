interface ImageProps {
	className: string;
	imgUrl: string;
}

export function Image({ className, imgUrl }: ImageProps) {
	return (
		<div className={`${className} image-container`}>
			<img src={imgUrl} className="image-grid" alt="Something" />
		</div>
	)
}
