import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

	renderPosts() {
		if (Object.keys(this.props.posts).length === 0) {
			return (
				<ul />
			);
		}
		console.log(this.props.posts.children);
		return this.props.posts.children.map((post) => {
			return (
					<li className="list-group-item" key={post.data.id}>
							<span className="pull-xs-right">{post.data.author}</span>
							<strong>{post.data.title}</strong>
					</li>
			);
		});
	}

	render() {
		return (
			<div>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
