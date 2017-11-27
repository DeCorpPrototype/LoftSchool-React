import React, {Component} from 'react';
import Title from './Title';
import './PersonalForm.css';

export class PersonalForm extends Component {

	handleChangeForm = (event) => {
		const {name, value} = event.target;
		this.props.onChangeForm(name, value);
	};

	render() {
		return (
            <div>
              <Title>Персональная информация</Title>
              <div className="personal-form">
                <input
                    name='firstName'
                    placeholder='First name'
                    value={this.props.firstName}
                    onChange={this.handleChangeForm}
                />
                <input
                    name='lastName'
                    placeholder='Last name'
                    value={this.props.lastName}
                    onChange={this.handleChangeForm}
                />
                <input
                    name='email'
                    placeholder='Email'
                    value={this.props.email}
                    onChange={this.handleChangeForm}
                />
              </div>
            </div>
		);
	}
}

export default PersonalForm;