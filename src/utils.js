

export function saveFile(key, value) {
	if (window && window.indexedDB) {
		window.indexedDB.saveObject(key, value);
	}
}

export function getFile(key, value) {
	if (window && window.indexedDB) {
		return window.indexedDB.saveObject(key);
	}
}

