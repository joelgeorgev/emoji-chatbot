import * as actions from './index'

describe('actions test', () => {
  it('sendMessage should create SEND_MESSAGE action', () => {
    expect(actions.sendMessage('Hello World')).toEqual({
      type: 'SEND_MESSAGE',
      message: 'Hello World'
    })
  })
})