import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactImageFallback from 'react-image-fallback';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	renderPosts() {
		if (Object.keys(this.props.posts).length === 0) {
			return (
				<ul />
			);
		}
		console.log(this.props.posts.children);
		return this.props.posts.children.map((post) => 
			<li className="list-group-item clearfix" key={post.data.id}>
				<ReactImageFallback 
					src={post.data.thumbnail}
					initialImage="../../images/load.gif"
					fallbackImage="../../images/blanc.png"
					className="post-image"
				/>
				<div className="post-description">
					<strong>{post.data.title}</strong>
					<p className="">by: {post.data.author}</p>
				</div>
				<a 
					href={`mailto:?subject=I wanted you to see this funny reddit post
						&body=Check this out! ${post.data.url}`}
					title="Share by Email"
					className="pull-xs-right"
				>
					<img alt="e-mail" src="../../images/mail.png" />
				</a>
			</li>
		);
	}

	render() {
		return (
			<div className="data-container">
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
