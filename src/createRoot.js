export function createRoot(prefix = `${Date().replace(/ /g, '_')}_`) {
	function createRandomString() {
		return Math.random().toString(36).substring(7);
	}

	const newRoot = document.createElement('div');
	newRoot.id = prefix + '-' + createRandomString();
	document.body.appendChild(newRoot);
	return newRoot;
}
