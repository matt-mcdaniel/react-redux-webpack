import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {

	render() {
		return (
			<span>
				<div style={{backgroundColor:'#c9c9c9', padding:'20px'}}>
					<Link to="home">Home</Link>
					{' '}
					<Link to="user">User</Link>
				</div>

				{this.props.children}
			</span>
		)
	}
}

export default Home;