import React, {Component} from 'react';
import './App.css';
import Step from './Step';
import PersonalForm from './PersonalForm';
import CardForm from './CardForm';

class App extends Component {

	state = {
		step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
        isTimeOver: false
	};

	handleTabClick = (step) => {
		if (step)
			this.setState({step})
	};

	handleChangeForm = (name, value) => {
		if (name && value)
			this.setState({
				[name]: value
			})
	};

	handleClickNextForm = () => {
		this.setState({
			step: this.state.step + 1
		})
	};

	handleChangeTimeOver = (arg) => {
		if (arg)
			this.setState({
				isTimeOver: arg
			})
	};

	isFormCommitable = () => {

		const state = this.state;

		if (state.step === 1) {

			if (state.firstName !== '' && state.lastName !== '' && state.email !== '' && state.email.includes('@')) {

				return true;
			}

		} else if (state.step === 2 && state.cardNumber.length === 16) {

			return true;
		}

		return false;
	};

	renderForm = () => {

		const state = this.state;

		if (state.step === 1) {

			return(
				<PersonalForm
					firstName={state.firstName}
					lastName={state.lastName}
					email={state.email}
					onChangeForm={this.handleChangeForm}
				/>
			)
		}

		if (state.step === 2) {

			return (
				<CardForm
					cardNumber={state.cardNumber}
					onChangeForm={this.handleChangeForm}
					onChangeTimeOver={this.handleChangeTimeOver}
				/>
			)

		}

		return 'Поздравляем!'

	};

	render() {

		const steps = ['Personal information', 'Card information', 'Finish'].map(
			(tabTitle, index, arr) => {

				let isSelected = false,
					isClickable = false;

				if (this.state.step === 1 && !index) {
					isSelected = true;
				} else if (this.state.step === 2) {
					if (!index) {
						isClickable = true;
					} else if (index === 1) {
						isSelected = true;
					}
				} else if (this.state.step === 3) {
					if (index < 2) {
						isClickable = true;
					} else if (index === 2) {
						isSelected = true;
					}
				}

				return (
					<Step
						key={arr[index]}
						onClick={this.handleTabClick}
						number={index + 1}
						isSelected={isSelected}
						isClickable={isClickable}
					>{arr[index]}</Step>
				)
			}
		);

		return (
			<div className="container">
				<div className="tab-panel">
					{steps}
				</div>
				<div className="form-content">
					{this.renderForm()}
				</div>
				<div className="button-panel">
					<button className="button-next"
							disabled={!this.isFormCommitable() || this.state.isTimeOver}
							onClick={this.handleClickNextForm}
					>Next</button>
				</div>

			</div>
		);
	}
}

export default App;
