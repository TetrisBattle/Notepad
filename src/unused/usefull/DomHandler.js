// #page .container button
export function getNode(name) {
	const node = document.querySelector(name)
	// const node = document.querySelectorAll(name) // get all nodes
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

export function getCssVarValue(cssVar) {
	return getComputedStyle(document.documentElement).getPropertyValue(
		'--' + cssVar
	)
}

export function setCssVarValue(cssVar, newValue) {
	document.documentElement.style.cssText = `--${cssVar}: ${newValue}`
}

export function hideNode(name) {
	document.querySelector(name).style.display = 'none'
}
