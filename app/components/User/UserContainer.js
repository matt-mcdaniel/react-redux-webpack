import React from 'react';
import {connect} from 'react-redux';
import User from './User';
import {updateUser, resetUser} from '../../state/actions/user';

const mapStateToProps = state => state;

const mapDispatchToProps = (state) => {
	return dispatch => ({
		updateUser: () => dispatch(updateUser()),
		resetUser: () => dispatch(resetUser())
	})
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User);