const UserReducer = (state = {
    name: "Anthony Gonsalvis",
    age: 21,
    lastValues: []
}, action) => {

    switch (action.type) {

        case "USER_SET_NAME":
            state = {
                ...state,
                name: action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "USER_SET_AGE":
            state = {
                ...state,
                name: action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        default:
            state.result++

    }

    return state;

}

export default UserReducer;