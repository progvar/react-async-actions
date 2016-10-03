const initState = {
	loggedIn: false
}


export default function rootReducer(state = initState, action) {
	switch(action.type) {
		'LOGIN_ATTEMPT':
			return state;
		'LOGIN_SUCCESS':
			return { loggedIn: action.payload };
		'LOGIN_FAILED':
			return state;
		// dummy logout reducer will be the same, kinda
		default:
			return state;
	}
}