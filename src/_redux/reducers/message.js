const INITIAL_STATE = {
    data: []
}

export default function messages(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return { data: [...state.data, { id: Math.random(), message: action.payload.message }] }
        default:
            return state
    }
}