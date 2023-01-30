import React, { useState, useEffect } from "react";
import { ContextType, Photo } from "./types/types";

const { Provider, Consumer } = React.createContext<ContextType>({
	photosList: [],
	toggleFavorite: () => { },
	addPhotoToCart: () => { },
	cartItems: [],
	removePhotoFromCart: () => { },
});

interface ContextProviderProps {
	children: React.ReactNode;
}

function ContextProvider(props: ContextProviderProps) {
	const [photosList, setPhotosList] = useState<Array<Photo>>([]); //! все фотографии
	const [cartItems, setCartItems] = useState<Array<Photo>>([]); //! только те фотографии, которые добавлены в корзину

	const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

	const toggleFavorite = (idPhoto: string) => {
		setPhotosList((prevList) => {
			return prevList.map((photo) => photo.id === idPhoto ? { ...photo, isFavorite: !photo.isFavorite } : photo)
		});
	};

	const addPhotoToCart = (objNew: Photo) => {
		setCartItems((prevArr) => [...prevArr, objNew]);
	};

	const removePhotoFromCart = (idPhoto: string) => {
		setCartItems((prevArr) => prevArr.filter((item) => item.id !== idPhoto));
	};

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => (setPhotosList(data)))
			.catch((err) => console.log(err)) //* TODO: вывести сообщение об ошибке пользователю - ?
	}, []);

	console.log('photosList', photosList);
	console.log('cartItems', cartItems);

	return (
		<Provider value={{ photosList, toggleFavorite, cartItems, addPhotoToCart, removePhotoFromCart }} >
			{props.children}
		</Provider>
	)
}

export { ContextProvider, Consumer as ContextConsumer };
