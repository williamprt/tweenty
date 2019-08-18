export function requestAPI() {
    return {
        type: 'ASYNC_REQUEST_API'
    }
}

export function sendMessage(message) {
    return {
        type: 'ASYNC_SEND_MESSAGE',
        payload: {
            message
        }
    }
}