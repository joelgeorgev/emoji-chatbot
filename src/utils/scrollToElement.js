export const scrollToElement = (selector, index, options) => {
  const node = document.querySelectorAll(selector)[index]
  if (node) {
    node.scrollIntoView(options)
  }
}
