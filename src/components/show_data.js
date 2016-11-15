import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactImageFallback from 'react-image-fallback';
import Modal from 'react-modal';
import { fetchPosts } from '../actions/index';
import { ModalData } from './modal_data';

class PostsIndex extends Component {
	constructor() {
      super();

      this.state = { open: false, index: null }; 
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal(i) { this.setState({ open: true }); this.setState({ index: i }); }

    closeModal() { this.setState({ open: false }); }

	renderPosts() {
		if (Object.keys(this.props.posts).length === 0 && this.props.error.length === 0) {
			return (
				<div>Loading...</div>
			);
		}
		if (this.props.error.length > 0) {
			return (
				<div className="error-container">
					<h3 className="text-danger">Opps! There was an error in your search</h3>
					<p>Most likey it is has to do with the category not existing, or being private.</p>
					<p>Don't panic tho, go ahead and pick another category!</p>
					<img className="error-image" alt="error!" src="../../images/error.gif" />
				</div>
			);
		}
		//console.log(this.props.posts.children);
		return this.props.posts.children.map((post, index) => 
			<li 
				onClick={this.openModal.bind(this, index)} 
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
			</li>
		);
	}

	render() {
		return (
			<div className="data-container">
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
				<Modal
					className="ModalClass"
					overlayClassName="OverlayClass"
					isOpen={this.state.open}
					onRequestClose={this.closeModal}
				>
					<button className="post-item-btn-close" onClick={this.closeModal}>x</button>
					<ModalData index={this.state.index} data={this.props.posts.children} />
				</Modal>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all, error: state.posts.error };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
