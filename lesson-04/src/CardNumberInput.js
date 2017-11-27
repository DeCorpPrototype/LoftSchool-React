import React, {Component} from 'react';

class CardNumberInput extends Component {

	static displayName = 'CardNumberInput';


	state = {
		number: ''
	};

	format = (inputValue) => {

		if (inputValue) {

			let inputValueString = inputValue.toString();

			let cardCode = inputValueString.replace(/[^\d]/g, '');
			cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
			return cardCode;
		}

		return '';
	};

	normalize = (cardNumber) => {
		return cardNumber.toString().replace(/ /g, '');
	};

	formatStateNumber = (number) =>{
		this.setState({
			number: this.format(number)
		})
	};

	componentWillMount=() => {

		this.formatStateNumber(this.props.cardNumber)
	};

	componentWillReceiveProps = (props) => {
		this.formatStateNumber(props.cardNumber)
	};

	handleInputChange = (event) => {
		const normalizeValue = this.normalize(event.target.value);
		this.props.onChange(normalizeValue);
	};

	render() {
		return <input
			value={this.state.number}
			onChange={this.handleInputChange}
		/>;
	}
}

export default CardNumberInput;