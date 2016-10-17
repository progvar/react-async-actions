import 'whatwg-fetch';


function loginUser(username, password) {
    const userData = JSON.stringify({
        username,
        password
    });
    
    const requestConfig = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: userData
    };

    
    return fetch('http://localhost:3000/login', requestConfig)
            .then(parseResponse)
            .then(data => data);
}


function parseResponse(res) {
    try {
        console.log(res)
        return res.json();
    } catch (err) {
        console.log(err)
        throw err;
    }
}


function logoutUser(uid) {
    // some more magic
}


export async function login(username, password, dispatch) {
    try {
        // dispatch({ type: 'LOGIN_ATTEMPT' })
        const loginAction = await loginUser(username, password);
        console.log(loginAction)
        // dispatch({ type: 'LOGIN_SUCCESS', payload: true })
    } catch(err) {
        // dispatch({ type: 'LOGIN_FAILED' })
        console.log(err);
        throw err;
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