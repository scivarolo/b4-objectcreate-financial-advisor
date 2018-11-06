/* Responsible for rendering elements to the DOM. */

function render(element, location) {
  document.querySelector(location).appendChild(element)
}

export default render