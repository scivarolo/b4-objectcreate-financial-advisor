/* Element Factory for building DOM elements */

function buildEl(el, attrObj, content, ...children) {
  // HTML Element Factory
  let element = document.createElement(el)
  for(let attr in attrObj) {
    element.setAttribute(attr, attrObj[attr])
  }
  element.textContent = content || null
  children.forEach((child) => {
    element.appendChild(child)
  })
  return element
}

export default buildEl