import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactImageFallback from 'react-image-fallback';
import Modal from 'react-modal';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	constructor() {
      super();

      this.state = { open: false }; 
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal() { this.setState({ open: true }); }

    closeModal() { this.setState({ open: false }); }

	renderPosts() {
		if (Object.keys(this.props.posts).length === 0 && !this.props.error) {
			return (
				<div>Loading...</div>
			);
		}
		if (this.props.error) {
			console.log(this.props.error.message);
			return (
				<div className="error-container">
					<h3 className="text-danger">Opps! There was an error in your search</h3>
					<img className="error-image" alt="error!" src="../../images/error.gif" />
					<p>Most likey it is has to do with the category not existing, or being private.</p>
					<p>Don't panic tho, go ahead and pick another category!</p>
				</div>
			);
		}
		console.log(this.props.posts.children);
		return this.props.posts.children.map((post) => 
			<li 
				onClick={this.openModal} 
				className="list-group-item clearfix post-item" 
				key={post.data.id}
			>
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
				<Modal
					className="ModalClass"
					overlayClassName="OverlayClass"
					isOpen={this.state.open}
					onRequestClose={this.closeModal}
				>
					<button className="post-item-btn-close" onClick={this.closeModal}>x</button>
					<h3>Author: {post.data.author}</h3>
					<p>{post.data.title}</p>
					<ReactImageFallback 
						src={post.data.preview.images[0].source.url}
						initialImage="../../images/load.gif"
						fallbackImage="../../images/blanc.png"
						className="post-item-image"
					/>
				</Modal>
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
	return { posts: state.posts.all, error: state.posts.error };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
