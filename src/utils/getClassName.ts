export function getClassName(indexImage: number) {
	if (indexImage % 5 === 0) {
		return 'big';
	}
	else if (indexImage % 6 === 0) {
		return 'wide';
	}
	return 'tall';
}
