import React, { useState, useEffect } from "react";
import { ContextType, Photo } from "./types/types";

const { Provider, Consumer } = React.createContext<ContextType>({
	photosList: [],
	toggleFavorite: function (idPhoto: string): Array<Photo> { return [] },
});

interface ContextProviderProps {
	children: React.ReactNode;
}

function ContextProvider(props: ContextProviderProps) {
	const [photosList, setPhotosList] = useState<Array<Photo>>([]);

	const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
	// const url = "https://scrimba.com/p/p7P5Hd/c79Jask";

	const toggleFavorite = (idPhoto: string) => {
		setPhotosList((prevList) => {
			return prevList.map((photo) => photo.id === idPhoto ? { ...photo, isFavorite: !photo.isFavorite } : photo)
		});
		console.log('The heart was clicked!');
	};

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => (setPhotosList(data)))
			.catch((err) => console.log(err)) //* TODO: вывести сообщение об ошибке пользователю - ?
	}, []);

	console.log('photosList', photosList);

	return (
		<Provider value={{ photosList: photosList, toggleFavorite: toggleFavorite }} >
			{props.children}
		</Provider>
	)
}

export { ContextProvider, Consumer as ContextConsumer };
