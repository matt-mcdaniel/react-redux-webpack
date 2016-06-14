import './Home.scss';
import React from 'react';
import squirrelImage from 'img/squirrel.jpg';

class Home extends React.Component {
	render(){
		return (
			<div>
				<h3 className="route-1-link">Some Title</h3>
				<img src={squirrelImage} />
			</div>
		)
	}
}

export default Home;