export function requestAPI(page = 1) {
    return {
        type: 'ASYNC_REQUEST_API',
        payload: {
            page,
        }
    }
}

export function sendMessage(message) {
    return {
        type: 'ASYNC_SEND_MESSAGE',
        payload: {
            message,
        }
    }
}

export function destroyMessage(id) {
    return {
        type: 'ASYNC_DESTROY_MESSAGE',
        payload: {
            id,
        }
    }
}