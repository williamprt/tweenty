import { takeLatest, all, put, call } from 'redux-saga/effects'

function getApi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                {id: Math.random(), message: 'Hello World'}
            )
        }, 2000)
    });
};

function sendApi(message) {
    return new Promise((resolve) => {
        resolve(
            {id: Math.random(), message }
        )
    });
};

function* asyncSendMessage(action) {
    try {
        yield call(sendApi, action.payload.message)

        yield put({
            type: 'SEND_MESSAGE',
            payload: {
                message: action.payload.message
            }
        })
    } catch (error) {

    }
};

function* asyncRequestAPI() {
    try {
        const response = yield call(getApi)
        yield put({
            type: 'SUCCESS_API',
            payload: {
                data: response
            }
        })
    } catch (error) {
        yield put({
            type: 'FAILURE_API'
        })
    }
}

export default function* root() {
    yield all([
        takeLatest('ASYNC_SEND_MESSAGE', asyncSendMessage)
    ])
    yield all([
        takeLatest('ASYNC_REQUEST_API', asyncRequestAPI)
    ])
};