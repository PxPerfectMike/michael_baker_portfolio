export const arrOfObj = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
	22, 23, 24,
];

export const randomColorGenerator = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return `#${randomColor}`;
};
