import React, { useState, useEffect } from "react";

const { Provider, Consumer } = React.createContext({});

interface ContextProviderProps {
	children: React.ReactNode;
}

function ContextProvider(props: ContextProviderProps) {
	const [photosList, setPhotosList] = useState([]);

	const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
	// const url = "https://scrimba.com/p/p7P5Hd/c79Jask";

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => (setPhotosList(data)))
	}, []);

	console.log('photosList', photosList);

	return (
		<Provider value={{ photosList: photosList }} >
			{props.children}
		</Provider>
	)
}

export { ContextProvider, Consumer as ContextConsumer };