import { useEffect, useRef, useState } from "react";

export function useHover() {
	const myRef = useRef<HTMLDivElement>(null);
	const [hovered, setHovered] = useState(false);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	useEffect(() => {
		const elem = myRef.current;

		if (elem) {
			elem.addEventListener("mouseenter", handleMouseEnter);
			elem.addEventListener("mouseleave", handleMouseLeave);
		}

		return () => {
			if (elem) {
				elem.removeEventListener("mouseenter", handleMouseEnter);
				elem.removeEventListener("mouseleave", handleMouseLeave);
			};
		}
	}, []);

	return { hovered, myRef };
}
