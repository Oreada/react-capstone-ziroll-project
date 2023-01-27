export interface Photo {
	id: string;
	isFavorite: boolean;
	url: string;
}

export type ContextType = {
	photosList: Array<Photo>;
};

export interface ImageProps {
	className: string;
	imgUrl: string;
}
