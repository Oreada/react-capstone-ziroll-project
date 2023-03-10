import { ContextConsumer } from "../context";
import { Image } from "../components/Image";
import { getClassName } from "../utils/getClassName";

export function Photos() {
	console.log('Photos renders');
	return (
		<ContextConsumer>
			{(context) => (
				<main className="photos">
					{context.photosList.map((item, index) => (
						<Image key={item.id} img={item} className={getClassName(Number(index))} />
					))}
					{context.errorFetch && <div className="error-message">{context.errorFetch}</div>}
				</main>
			)}
		</ContextConsumer>
	)
}
