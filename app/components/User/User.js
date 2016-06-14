import React from 'react';
import './User.scss';

class Route2 extends React.Component {

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

					<button onClick={() => this.props.resetUser()}>Reset</button>
				</span>
			)
		} else {
			return (
				<span>
					<div className="get-user-button" onClick={() => this.props.updateUser()}>Fetch User</div>
				</span>
			)
		}
	}
}

export default Route2;