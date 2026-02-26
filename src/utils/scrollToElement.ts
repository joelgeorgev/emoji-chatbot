import { getDocument } from './getDocument.ts'

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
