import './_home.scss';
import React from 'react';
import squirrelImage from './squirrel.jpg';

class Home extends React.Component {
	render(){
		return (
			<div>
				<h3 className="route-1-link">Home Page</h3>
				<img src={squirrelImage} />
			</div>
		)
	}
}

export default Home;