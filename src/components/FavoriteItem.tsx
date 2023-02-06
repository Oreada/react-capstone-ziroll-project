import { FavoriteItemProps } from "../types/types";

export function FavoriteItem({ url }: FavoriteItemProps) {
	return (
		<div className="favourite-item">
			<img className="favourite-img" src={url} alt="Something" />
		</div>
	)
}
