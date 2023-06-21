import React from 'react';

class Button extends React.Component {
  clickHandler() {
    console.log('Click fired!');
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler.bind(this)}>OK</button>
      </div>
    );
  }
}

export default Button;
