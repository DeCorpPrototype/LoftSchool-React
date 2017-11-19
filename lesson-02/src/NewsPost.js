import React, {Component} from 'react';

import Comment from './Comment';

import "./NewsPost.css";

let id = 0;

function getCommentId() {
	id += 1;
	return id;
}

class NewsPost extends Component {

	state = {
		commentInput: '',
		comments: []
	};

	handleChange = (event) => {
		this.setState({
			commentInput: event.target.value
		});
	};

	handleKeyDown = event => {
		if (event.keyCode === 13) {
			const {commentInput, comments} = this.state;
			const newComment = {text: commentInput, id: getCommentId()};

			this.setState({commentInput: '', comments: [...comments, newComment]});
		}
	};

	handleDelete = id => {
		this.setState(state => ({
			comments: state.comments.filter(comment => id !== comment.id)
		}));
	};

	render() {

		let value = this.state.commentInput;
		let comments = this.state.comments.map(
			comment => <Comment
				key={comment.id}
				id={comment.id}
				text={comment.text}
				onDelete={this.handleDelete}
			/>);

		return (
			<div className="news-post">
				<p>{this.props.text}</p>
				<input className="comment-input"
					   type="text"
					   onChange={this.handleChange}
					   onKeyDown={this.handleKeyDown}
					   value={value}
				/>
				{comments}
			</div>
		);
	}
}

export default NewsPost;
