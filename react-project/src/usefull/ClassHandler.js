export function getNode(name) { // #id | .class | div
	const node = document.querySelector(name)
	return node
}

export function addClass(name, newClassName) {
	const node = document.querySelector(name)
	node.classList.add(newClassName)
}

export function removeClass(name, removeClassName) {
	const node = document.querySelector(name)
	node.classList.remove(removeClassName)
}

export function toggleClass(name, className) {
	const node = document.querySelector(name)
	node.classList.toggle(className)
}
