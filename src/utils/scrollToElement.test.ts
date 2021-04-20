import { scrollToElement } from './scrollToElement'

interface Node {
  scrollIntoView: () => void
}

const selector = 'selector'

const createQuerySelectorSpy = (nodeList: Node[] = []) =>
  jest
    .spyOn(document, 'querySelectorAll')
    .mockReturnValue((nodeList as unknown) as NodeListOf<Element>)

const createNode = (): Node => ({
  scrollIntoView: jest.fn()
})

describe('scrollToElement', () => {
  describe('When a selector is provided', () => {
    test('invokes document.querySelectorAll', () => {
      const querySelectorSpy = createQuerySelectorSpy()

      scrollToElement(selector, 0, {})

      expect(querySelectorSpy).toHaveBeenCalledTimes(1)
      expect(querySelectorSpy).toHaveBeenCalledWith(selector)
    })
  })

  describe('Given document.querySelectorAll returns TWO nodes', () => {
    describe('When index is provided as 0', () => {
      test('invokes scrollIntoView on the first node', () => {
        const firstNode = createNode()
        const secondNode = createNode()
        createQuerySelectorSpy([firstNode, secondNode])

        scrollToElement(selector, 0, {})

        expect(firstNode.scrollIntoView).toHaveBeenCalledTimes(1)
        expect(secondNode.scrollIntoView).toHaveBeenCalledTimes(0)
      })
    })

    describe('When index is provided as 1', () => {
      test('invokes scrollIntoView on the second node', () => {
        const firstNode = createNode()
        const secondNode = createNode()
        createQuerySelectorSpy([firstNode, secondNode])

        scrollToElement(selector, 1, {})

        expect(firstNode.scrollIntoView).toHaveBeenCalledTimes(0)
        expect(secondNode.scrollIntoView).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('When scroll options are provided', () => {
    test('invokes scrollIntoView with the options', () => {
      const options: ScrollIntoViewOptions = { behavior: 'smooth' }
      const node = createNode()
      createQuerySelectorSpy([node])

      scrollToElement(selector, 0, options)

      expect(node.scrollIntoView).toHaveBeenCalledWith(options)
    })
  })
})
