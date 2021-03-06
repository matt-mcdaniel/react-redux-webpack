export default (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_USER':
			return Object.assign({}, action.user);
		case 'RESET_USER':
			return {};
		default:
			return state;
	}
}