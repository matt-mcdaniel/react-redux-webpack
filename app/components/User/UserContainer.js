import React from 'react';
import {connect} from 'react-redux';
import User from './User';
import {updateCurrentUser} from '../../actions/user';

const mapStateToProps = state => state;

const mapDispatchToProps = (state) => {
	return dispatch => ({
		updateCurrentUser: (user) => dispatch(updateCurrentUser())
	})
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User);