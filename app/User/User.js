import React from 'react';
import './_user.scss';
import { store } from '../Root';

class Route2 extends React.Component {
	constructor(){
		super();

		this.getUser = this.getUser.bind(this);
	}

	getUser(){

		this.props.updateCurrentUser();

	}

	render(){
		if (this.props.user) {
			return (
				<span>
					<h3>Current User</h3>
					<div>{this.props.user.first_name}</div>
					<div>{this.props.user.last_name}</div>
					<div>{this.props.user.user_name}</div>
					<div>{this.props.user.phone}</div>
					<div>{this.props.user.organization}</div>
					<div>{this.props.user.email}</div>
				</span>
			)
		} else {
			return (
				<span>
					<div className="get-user-button" onClick={this.getUser}>Fetch User</div>
				</span>
			)
		}
	}
}

export default Route2;