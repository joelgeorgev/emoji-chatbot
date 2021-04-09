export const scrollToElement = (
  selector: string,
  index: number,
  options: ScrollIntoViewOptions
): void => {
  const node = document.querySelectorAll(selector)[index]

  if (node) {
    node.scrollIntoView(options)
  }
}
