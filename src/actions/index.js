function loginUser(username, password) {
	// some magic
}


function logoutUser(uid) {
	// some more magic
}


export function login(username, password) {
	return async dispatch => {
		try {
			dispatch({ type: 'LOGIN_ATTEMPT' })
			await loginUser(username, password);
			dispatch({ type: 'LOGIN_SUCCESS', payload: true })
		} catch(err) {
			dispatch({ type: 'LOGIN_FAILED' })
			console.log(err);
		}
	} 
}


export function logout(uid) {
	return async dispatch => {
		try {
			dispatch({ type: 'LOGOUT_ATTEMPT' })
			await logoutUser(uid);
			dispatch({ type: 'LOGOU_SUCCESS', payload: false })
		} catch(err) {
			dispatch({ type: 'LOGOUT_FAILED' })
			console.log(err);
		}
	} 
}