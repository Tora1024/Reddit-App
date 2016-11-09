import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	constructor(props) {
		super(props);

		this.state = { imgError: false };
		this.onImageError = this.onImageError.bind(this);
		this.renderImage = this.renderImage.bind(this);
	}

	onImageError() {
		this.setState({ imgError: true });
	}

	renderImage(post) {
		if (!this.state.imgError) {
			return <img alt={post.data.title} src={post.data.thumbnail} onError={this.onImageError} />;
		}
	}

	renderPosts() {
		if (Object.keys(this.props.posts).length === 0) {
			return (
				<ul />
			);
		}
		console.log(this.props.posts.children);
		return this.props.posts.children.map((post) => 
			<li className="list-group-item" key={post.data.id}>
				{ this.renderImage(post) }
				<span className="pull-xs-right">by: {post.data.author}</span>
				<strong>{post.data.title}</strong>
			</li>
		);
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
