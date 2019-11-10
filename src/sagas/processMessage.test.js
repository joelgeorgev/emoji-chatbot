import { runSaga } from 'redux-saga'

import { processMessage } from './processMessage'
import { saveMessage } from '../actions'

jest.mock('../moji-translate', () => ({
  translate: () => '🐱‍🏍'
}))

describe('processMessage saga', () => {
  test('emits effects to save user and bot messages', () => {
    const text = 'Hello'
    const dispatch = jest.fn()

    runSaga({ dispatch }, processMessage, { text })

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      saveMessage({ author: 'You', text })
    )
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      saveMessage({ author: 'Bot', text: '🐱‍🏍' })
    )
  })
})
