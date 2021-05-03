import { getDocument } from './getDocument'

export const scrollToElement = (
  selector: string,
  index: number,
  options: ScrollIntoViewOptions
): void => {
  const node = getDocument().querySelectorAll(selector)[index]

  if (node) {
    node.scrollIntoView(options)
  }
}
