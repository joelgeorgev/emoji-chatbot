import { scrollToElement } from './scrollToElement'

const selector = 'selector'

const createQuerySelectorSpy = (nodeList = []) =>
  jest.spyOn(document, 'querySelectorAll').mockImplementation(() => nodeList)

const createNode = () => ({
  scrollIntoView: jest.fn()
})

describe('scrollToElement', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('When a selector is provided', () => {
    let querySelectorSpy

    beforeEach(() => {
      querySelectorSpy = createQuerySelectorSpy()
      scrollToElement(selector)
    })

    test('invokes document.querySelectorAll', () => {
      expect(querySelectorSpy).toHaveBeenCalledTimes(1)
      expect(querySelectorSpy).toHaveBeenCalledWith(selector)
    })
  })

  describe('Given document.querySelectorAll returns TWO nodes', () => {
    let firstNode
    let secondNode

    beforeEach(() => {
      firstNode = createNode()
      secondNode = createNode()
      createQuerySelectorSpy([firstNode, secondNode])
    })

    describe('When index is provided as 0', () => {
      beforeEach(() => {
        scrollToElement(selector, 0)
      })

      test('invokes scrollIntoView on the first node', () => {
        expect(firstNode.scrollIntoView).toHaveBeenCalledTimes(1)
        expect(secondNode.scrollIntoView).toHaveBeenCalledTimes(0)
      })
    })

    describe('When index is provided as 1', () => {
      beforeEach(() => {
        scrollToElement(selector, 1)
      })

      test('invokes scrollIntoView on the second node', () => {
        expect(firstNode.scrollIntoView).toHaveBeenCalledTimes(0)
        expect(secondNode.scrollIntoView).toHaveBeenCalledTimes(1)
      })
    })

    describe('When scroll options are provided', () => {
      const options = {
        speed: 'fast'
      }

      beforeEach(() => {
        scrollToElement(selector, 0, options)
      })

      test('invokes scrollIntoView with the options', () => {
        expect(firstNode.scrollIntoView).toHaveBeenCalledWith(options)
      })
    })
  })
})
