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
        return res.json();
    } catch (err) {
        throw err;
    }
}


export function login(username, password) {
    return async dispatch => {
        try {
            const loginAction = await loginUser(username, password);
            dispatch({ type: 'LOGIN_SUCCESS', payload: loginAction })
        } catch(err) {
            dispatch({ type: 'LOGIN_FAILED' })
            throw err;
        }
    }
}