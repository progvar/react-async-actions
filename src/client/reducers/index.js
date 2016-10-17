const initState = {
    loggedIn: false
}


export default function rootReducer(state = initState, action) {
    switch(action.type) {
        case 'LOGIN_ATTEMPT':
            return state;
        case 'LOGIN_SUCCESS':
            return { loggedIn: action.payload };
        case 'LOGIN_FAILED':
            return state;
        // dummy logout reducer will be the same, kinda
        default:
            return state;
    }
}