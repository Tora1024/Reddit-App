import React, { Component } from 'react';

import ReactImageFallback from 'react-image-fallback';

export class ModalData extends Component {
    renderImages(data) {
		if (Object.prototype.hasOwnProperty.call(data, 'preview')) {
			return (
				<ReactImageFallback
						key={data.preview.images[0].id}
						src={data.preview.images[0].source.url}
						initialImage="../../images/load.gif"
						fallbackImage="../../images/blanc.png"
						className="post-item-image"
				/>);
		}
    }


	render() {
		return (
			<div>
				<h3>Author: {this.props.data[this.props.index].data.author}</h3>
				<p>{this.props.data[this.props.index].data.title}</p>

				{ this.renderImages(this.props.data[this.props.index].data) }
			</div>
		);
	}
}

