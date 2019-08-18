const INITIAL_STATE = {
    data: [],
}

export default function messages(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return { data: [...state.data, { id: Math.random(), message: action.payload.message }] }
        case 'REQUEST_API':
            return { data: [...state.data] }
        case 'SUCCESS_API': 
            return { data: [...state.data, action.payload.data ] }
        case 'FAILURE_API': 
            return { data: [] } 
        default:
            return state
    }
}