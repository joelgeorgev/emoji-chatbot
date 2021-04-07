interface Options {
  behavior: 'smooth'
}

export const scrollToElement = (
  selector: string,
  index: number,
  options: Options
): void => {
  const node = document.querySelectorAll(selector)[index]

  if (node) {
    node.scrollIntoView(options)
  }
}
