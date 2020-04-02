import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import node from './images/node.jpg';

// eslint-disable-next-line no-unused-vars
class Search extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="father">
        父级
        <div className="son"></div>
        <div>
          <input type="text" />
          <img src={node} />
        </div>
      </div>
    );
  }
}

ReactDom.render(
  <Search />,
  document.getElementById('root'),
);
