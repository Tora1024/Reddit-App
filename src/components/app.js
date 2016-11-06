import React, { Component } from 'react';
import RedditData from './show_data';

export default class App extends Component {
  render() {
    return (
      <div>
		<h2>Simple temp app to use thunk</h2>
		<RedditData />
      </div>
    );
  }
}
