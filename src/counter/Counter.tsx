/* eslint-disable react/no-unknown-property */
import React from 'react';
import './counter.scss';

class ActualCounter extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <div className="counter">
        {this.state.count}
        <button
          type="button"
          onClick={() => {
            console.log('adding up');
            this.setState((state: typeof ActualCounter.prototype.state) => ({
              count: state.count + 1,
            }));
          }}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => {
            console.log('subtracting');
            this.setState((state: typeof ActualCounter.prototype.state) => ({
              count: state.count - 1,
            }));
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export const Counter = () => <ActualCounter />;
