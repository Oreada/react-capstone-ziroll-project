export interface Photo {
	id: string;
	isFavorite: boolean;
	url: string;
}

export type ContextType = {
	photosList: Array<Photo>;
	toggleFavorite: (idPhoto: string) => void;
	addPhotoToCart: (objNew: Photo) => void;
	cartItems: Array<Photo>;
};

export interface ImageProps {
	className: string;
	img: Photo;
}
