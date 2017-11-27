import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

class Modal extends Component {

	render() {

		const Modal = <div className='modal'>
			<div className="modal__fog">
				<div className="modal__body">
					<h1>Модальное окно</h1>
					<button className="button" onClick={this.props.hideModal}>x</button>
				</div>
			</div>
		</div>;

		return ReactDOM.createPortal(Modal, document.getElementById('portal'));
	}
}

export default Modal;