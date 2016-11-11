import React, { Component } from 'react';
import RedditData from './show_data';
import SearchBar from './search_bar';

export default class App extends Component {
  render() {
    return (
      <div className="flex-container">
		<div className="">
			<img className="logo-image" src="../../images/logo.png" alt="logo" />
			<h2 className="logo-title">Reddit Light Viewer</h2>
		</div>
		<SearchBar />
		<RedditData />
      </div>
    );
  }
}
