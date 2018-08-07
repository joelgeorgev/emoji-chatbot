import React from 'react';

export class ComposeMessage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onSendMessage(this.state.message);
      this.setState({ message: '' });
    }
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <div className='self-center ma2'>
        <input
          type='text'
          value={this.state.message}
          className='ba b--light-silver'
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}