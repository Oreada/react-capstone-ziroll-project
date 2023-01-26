import { NavLink } from "react-router-dom";

export function Header() {
	return (
		<header className="header">
			<NavLink to="/" end>
				<h2 className="header-title">Pic Some</h2>
			</NavLink>
			<NavLink to="/cart">
				<i className="ri-shopping-cart-line ri-fw ri-2x"></i>
			</NavLink>
		</header>
	)
}
