export interface Photo {
	id: string;
	isFavorite: boolean;
	url: string;
}

export type ContextType = {
	photosList: Array<Photo>;
	toggleFavorite: (idPhoto: string) => void;
	cartItems: Array<Photo>;
	addPhotoToCart: (objNew: Photo) => void;
	removePhotoFromCart: (idPhoto: string) => void;
	clearCart: () => void;
	errorFetch: string;
};

export interface ImageProps {
	className: string;
	img: Photo;
}

export interface CartItemProps {
	photo: Photo;
}
