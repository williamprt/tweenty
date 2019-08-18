import { takeLatest, all, put, call } from 'redux-saga/effects'
import api from '../../services/axios';

function sendApi(message) {
    return new Promise((resolve) => {
        resolve({ id: Math.random(), message })
    })
}

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
        const response = yield call(api.get, '/posts?page=1')
        let { docs, prevPage, nextPage, page } = response.data;
        console.log(response.data)
        yield put({
            type: 'SUCCESS_API',
            payload: {
                data: docs,
                
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