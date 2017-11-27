import React, {PureComponent} from 'react';
import classnames from 'classnames';
import './Step.css';

class Step extends PureComponent {

	handleClick = () => {

		if (this.props.isClickable)
			this.props.onClick(this.props.number);
	};

	render() {

		const {number, isClickable, isSelected, title, children} = this.props;

		console.log(this.props);

		let stepClass = classnames({
			'step': true,
			'step-clickable': isClickable,
			'step-selected': isSelected
		});

		return (
            <div className={stepClass} onClick={this.handleClick}>
              <p className="step__number">{number}</p>
              <p className="step__title">{children}</p>
            </div>
		);
	}
}

export default Step;