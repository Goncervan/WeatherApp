const initialState = {
    weather: [],

}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        default: return state;
        case 'GET_WEATHER':
            return {
                ...state,
                weather: action.payload
            }
    }
}

export default rootReducer;