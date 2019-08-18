export default function messages(state = [], action) {
    switch (action.type) {
        case 'ANY_THING':
            return [ ...state ]
        default:
            return state
    }
}