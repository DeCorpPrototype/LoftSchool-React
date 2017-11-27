import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {

	static displayName = 'CardNumberHolder';

	state = {
		cardNumber: ''
	};

	handleChange = (newCardNumberValue) => {
		this.setState({
			cardNumber: newCardNumberValue
		});
	};

	render() {
		return <CardNumberInput
			onChange={this.handleChange}
			cardNumber={this.state.cardNumber}
		/>;
	}
}

export default CardNumberHolder;