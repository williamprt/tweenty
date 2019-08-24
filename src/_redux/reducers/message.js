const INITIAL_STATE = {
    data: [],
    loading: [],
    infos: [],
    logs: [],
}

export default function messages(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return {
                data: [{
                    _id: action.payload.id, 
                    message: action.payload.message, 
                    createdAt: action.payload.createdAt 
                },
                ...state.data
                ],
                loading: [],
                infos: [],
                logs: [],
            }
        case 'DESTROY_MESSAGE':
            let index_of_element = state.data.map(item => item._id).indexOf(action.payload.id)
            state.data.splice(index_of_element, 1)
            return {
                data: [...state.data],
                loading: [],
                infos: [], 
                logs: [],
            }
        case 'REQUEST_API':
            return {
                ...state,
            }
        case 'LOADING_API':
            return {
                data: [],
                loading: [ action.payload.loading ],
                infos: action.payload.infos,
                logs: [],
            }
        case 'SUCCESS_API':
            return {
                data: action.payload.data, 
                loading: [],
                infos: action.payload.infos,
                logs: [],
            }
        case 'FAILURE_API': 
            return {
                data: [],
                loading: [],
                infos: action.payload.infos,
                logs: [{ 
                    _id: Math.random(), 
                    message: action.payload.message 
                }], 
            }
        default:
            return state
    }
}