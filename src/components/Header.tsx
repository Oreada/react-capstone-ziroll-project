import { NavLink } from "react-router-dom";
import { ContextConsumer } from "../context";

export function Header() {
	return (
		<ContextConsumer>
			{(context) => (
				<header className="header">
					<NavLink to="/" end>
						<h2 className="header-title">Pic Some</h2>
					</NavLink>
					<NavLink to="/favorite">
						{(context.photosList.some(item => item.isFavorite)) ?
							<i className="ri-hearts-fill ri-fw ri-2x"></i> :
							<i className="ri-hearts-line ri-fw ri-2x"></i>
						}
					</NavLink>
					<NavLink to="/cart">
						{(context.cartItems.length > 0) ?
							<i className="ri-shopping-cart-fill ri-fw ri-2x"></i> :
							<i className="ri-shopping-cart-line ri-fw ri-2x"></i>
						}
					</NavLink>
				</header>
			)}
		</ContextConsumer>
	)
}
