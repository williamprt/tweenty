const INITIAL_STATE = {
    data: [],
    infos: [],
    page: 1
}

export default function messages(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return { data: [{ _id: action.payload.id, message: action.payload.message }, ...state.data] }
        case 'DESTROY_MESSAGE':
            let index_of_element = state.data.map(item => item._id).indexOf(action.payload.id)
            state.data.splice(index_of_element, 1)
            return { data: [...state.data] }
        case 'REQUEST_API':
            return { data: [...state.data] }
        case 'SUCCESS_API':
            return { ...state, data: action.payload.data, infos: action.payload.infos, page: action.payload.page }
        case 'FAILURE_API': 
            return { data: [] } 
        default:
            return state
    }
}