import { scrollToElement } from './scrollToElement'
import { getDocument } from './getDocument'

jest.mock('./getDocument')

const mockGetDocument = getDocument as jest.Mock

interface MockNode {
  scrollIntoView: () => void
}

type QuerySelectorAll = () => MockNode[]

const createMockNode = (overrides?: Partial<MockNode>): MockNode => ({
  scrollIntoView: jest.fn(),
  ...overrides
})

const createMockQuerySelectorAll = (
  nodes: MockNode[] = []
): jest.MockedFunction<QuerySelectorAll> => jest.fn().mockReturnValue(nodes)

const selector = 'selector'

describe('scrollToElement', () => {
  test('invokes `document.querySelectorAll`', () => {
    const querySelectorAll = createMockQuerySelectorAll()
    mockGetDocument.mockReturnValue({ querySelectorAll })

    scrollToElement(selector, 0, {})

    expect(mockGetDocument).toHaveBeenCalledTimes(1)

    expect(querySelectorAll).toHaveBeenCalledTimes(1)
    expect(querySelectorAll).toHaveBeenCalledWith(selector)
  })

  describe('Given `document.querySelectorAll` returns TWO nodes', () => {
    describe('When `index` is provided as 0', () => {
      test('invokes `scrollIntoView` on the first node', () => {
        const firstNode = createMockNode()
        const secondNode = createMockNode()
        const querySelectorAll = createMockQuerySelectorAll([
          firstNode,
          secondNode
        ])
        mockGetDocument.mockReturnValue({ querySelectorAll })

        scrollToElement(selector, 0, {})

        expect(firstNode.scrollIntoView).toHaveBeenCalledTimes(1)
        expect(secondNode.scrollIntoView).toHaveBeenCalledTimes(0)
      })
    })

    describe('When `index` is provided as 1', () => {
      test('invokes `scrollIntoView` on the second node', () => {
        const firstNode = createMockNode()
        const secondNode = createMockNode()
        const querySelectorAll = createMockQuerySelectorAll([
          firstNode,
          secondNode
        ])
        mockGetDocument.mockReturnValue({ querySelectorAll })

        scrollToElement(selector, 1, {})

        expect(firstNode.scrollIntoView).toHaveBeenCalledTimes(0)
        expect(secondNode.scrollIntoView).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('When scroll options are provided', () => {
    test('invokes `scrollIntoView` with the options', () => {
      const options: ScrollIntoViewOptions = { behavior: 'smooth' }
      const node = createMockNode()
      const querySelectorAll = createMockQuerySelectorAll([node])
      mockGetDocument.mockReturnValue({ querySelectorAll })

      scrollToElement(selector, 0, options)

      expect(node.scrollIntoView).toHaveBeenCalledWith(options)
    })
  })
})
