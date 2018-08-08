import React from 'react'

export class ComposeMessage extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onSendMessage(this.state.message)
      this.setState({ message: '' })
    }
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }

  render() {
    return (
      <div className='self-center ma4'>
        <input
          type='text'
          placeholder='Write a message'
          value={this.state.message}
          className='ba b--light-silver pa2'
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}