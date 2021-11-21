/**
 * How to use:
 * import { getNode, addClass, removeClass } from "./usefull/functions.jsx"
 * addClass(".title", "addedClass")
 * console.log(getNode(".title"))
 * 
 * getNode() can get nodes by id, className or element, like div, h1
 */

export const getNode = (name) => { // #id .class div
  const node = document.querySelector(name)
  return node
}

export const addClass = (name, newClassName) => {
  const node = document.querySelector(name)
  node.classList.add(newClassName)
}

export const removeClass = (name, removeClassName) => {
  const node = document.querySelector(name)
  node.classList.remove(removeClassName)
}

export const toggleClass = (name, className) => {
  const node = document.querySelector(name)
  node.classList.toggle(className)
}
