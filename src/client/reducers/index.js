const initState = {
    loggedIn: false
}


export default function rootReducer(state = initState, action) {
    switch(action.type) {
        case 'LOGIN_ATTEMPT':
            console.log(action)
            return state;
        case 'LOGIN_SUCCESS':
            return { loggedIn: action.payload };
        default:
            return state;
    }
}