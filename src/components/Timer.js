/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import '../css/Timer.css';
import Context from './Context';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 102,
      background: 'green',
    };
    this.style = {
      height: '100%',
    };


    setInterval(() => {
      const { width } = this.state;
      const { starter } = this.props;
      if (starter !== ' ') {
        this.setState({
          width: width - 1,
          background: 'green',
        });
      } else if (width >= 100) {
        this.setState({
          width: 100,
          background: 'green',
        });
      } else if (width > 70) {
        this.setState({
          width: width - 1,
          background: 'green',
        });
      } else if (width > 30) {
        this.setState({
          width: width - 1,
          background: 'orange',
        });
      } else if (width > 0) {
        this.setState({
          width: width - 1,
          background: 'red',
        });
      } else if (width === 0) {
        this.setState({
          width: 101,
        });
      }
    }, 200);
  }

  render() {
    console.log(this.props.starter);
    const { width } = this.state;
    const { background } = this.state;
    return (
      <div className="barre">
        <Context.Provider value={{ width: this.state.width }}>
          {this.props.children}
        </Context.Provider>


        <div
          className="jauge"
          style={{
            ...this.style, background, width: `${width}%`, transitionProperty: 'width', transitionDuration: '100ms',
          }}
        />
      </div>
    );
  }
}

export default Timer;
