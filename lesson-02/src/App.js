import React, {Component} from 'react';

import NewsPost from './NewsPost';

import './App.css';

let id = 0;

function getNewsId() {
	id += 1;
	return id;
}

class App extends Component {

	state = {
		news: [],
		newsInput: ''
	};

	handleChange = (event) => {
		this.setState({
			newsInput: event.target.value
		});
	};

	handleKeyDown = event => {
		if (event.keyCode === 13) {
			const {newsInput, news} = this.state;
			const newNews = {text: newsInput, id: getNewsId()};

			this.setState({newsInput: '', news: [...news, newNews]});
		}
	};

	render() {

		let posts = this.state.news.map(post => <NewsPost key={post.id} text={post.text}/>);
		let value = this.state.newsInput;

		return (
			<div className="App">
				<h1>News list with comments</h1>
				<h4>Add news</h4>
				<input type="text" className="todo-input"
					   onChange={this.handleChange} onKeyDown={this.handleKeyDown}
					   ref={ elem => { this.input = elem } }
					   value={value}
				/>
				{posts}
			</div>
		);
	}
}

export default App;
