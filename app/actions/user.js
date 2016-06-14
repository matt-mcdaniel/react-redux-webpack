import 'whatwg-fetch';

export const updateCurrentUser = () => dispatch => {

	fetch('/api/user', { method: 'GET' })
		.then((res) => res.json())
		.then((data) => {

			dispatch({
				type: 'UPDATE_USER',
				user: data
			});

		})
		.catch((e) => console.log('User Fetch Failed:', e));

}
