import React, {Component} from 'react';
import Modal from './Modal';


class ModalButton extends Component {

	state = {
		isModalShow: false
	};

	hideModal = () => {
		this.setState({
			isModalShow: false
		})
	};

	showModal = () => {
		this.setState({
			isModalShow: true
		})
	};

	render() {

		const {isModalShow} = this.state;

		return (
			<div>
				<button onClick={this.showModal}>Модальное окно</button>
				{isModalShow ? <Modal hideModal={this.hideModal}/> : ''}
			</div>
		)
	}
}

export default ModalButton;