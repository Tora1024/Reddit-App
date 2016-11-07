import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		if (Object.keys(this.props.posts).length === 0) {
			return (
				<div>loading...</div>
			);
		} 
		/*return this.props.posts.map((post) => {
			if (post.title !== null && post.categories !== null && post.content !== null) {
				return (
					<li className="list-group-item" key={post.id}>
							<span className="pull-xs-right">{post.categories}</span>
							<strong>{post.title}</strong>
					</li>
				);
			}
		});*/
		console.log(this.props.posts.children);
		return <div>listo</div>;
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
