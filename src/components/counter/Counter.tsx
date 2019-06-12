/* eslint-disable react/no-unknown-property */
import React from 'react';

class ActualCounter extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <div>
        {this.state.count}
        {React.createElement(
          'button',
          {
            type: 'button',
            onClick: () => {
              console.log('adding up');
              this.setState((state: typeof ActualCounter.prototype.state) => ({
                count: state.count + 1,
              }));
            },
          },
          '+',
        )}
        {React.createElement(
          'button',
          {
            type: 'button',
            onClick: () => {
              console.log('subtracting up');
              this.setState((state: typeof ActualCounter.prototype.state) => ({
                count: state.count - 1,
              }));
            },
          },
          '-',
        )}
      </div>
    );
  }
}

export const Counter = () => <ActualCounter />;
