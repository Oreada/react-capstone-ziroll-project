import { FavoriteItem } from "../components/FavoriteItem";
import { ContextConsumer } from "../context";

export function Favorite() {
	console.log('Favorite renders');
	return (
		<ContextConsumer>
			{(context) => (
				<main className="favourite-page">
					<h2 className="favourite-title">Favorite photos</h2>
					<div className="favourite-list">
						{context.photosList.filter((item) => item.isFavorite)
							.map((item) => <FavoriteItem key={item.id} url={item.url} />)}
					</div>
				</main>
			)}
		</ContextConsumer >
	)
}
