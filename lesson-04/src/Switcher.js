import React, {Component} from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {

	state = {
		selectedChild: 0
	};

	handleChangeChild = (event) => {
		this.setState({
			selectedChild: +event.target.getAttribute('data-id')
		})
	};

	render() {

		const { children } = this.props;

		return (
			<div>
				<ul className="component-list">
					{
						React.Children.map(children, (child, index) => {
							return <li key={child.type.displayName || child.type.name}
									   onClick={this.handleChangeChild}
									   data-id={index}
									   className="component-list__name">{child.type.displayName || child.type.name}</li>
						})
					}
				</ul>
				<div>
					{children[this.state.selectedChild]}
				</div>
			</div>
		);
	}
}

export default Switcher;