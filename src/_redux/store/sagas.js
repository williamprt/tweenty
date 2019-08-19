import { takeLatest, all, put, call } from 'redux-saga/effects'
import api from '../../services/axios';

function getApi() {
    return new Promise(resolve => {
        setTimeout(() => {
            let date = new Date();
            let time = date.getUTCDate()
            resolve({_id: Math.random(), message: 'Hello World', createdAt: time})
        }, 1000)
    })
}

function postApi(action) {
    const response = new Promise(resolve => {
        setTimeout(() => {
            let date = new Date();
            let time = date.getUTCDate()
            resolve({_id: Math.random(), message: action.payload.message, createdAt: time})
        })
    }, 1000)

    return response;
}

function* asyncSendMessage(action) {
    try {
        const response = yield call(api.post, '/posts', {
            message: action.payload.message
        })
        let { _id: id, message, createdAt } = response.data
        yield put({
            type: 'SEND_MESSAGE',
            payload: {
                id,
                message,
                createdAt,
            }
        })
    } catch (error) {

    }
};

function* asyncDestroyMessage(action) {
    try {
        const response = yield call(api.delete, `/posts/${action.payload.id}`)
        let { _id: id } = response.data

        yield put({
            type: 'DESTROY_MESSAGE',
            payload: {
                id,
            }
        })
    } catch (error) {
        console.log(error)
    }
}

function* asyncRequestAPI(action) {
    try {
        const response = yield call(api.get, `/posts?page=${action.payload.page}`)
        let { docs, prevPage, nextPage, totalPages, page } = response.data;
        yield put({
            type: 'SUCCESS_API',
            payload: {
                data: docs,
                infos: { prevPage, nextPage, totalPages },
                page,
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
        takeLatest('ASYNC_DESTROY_MESSAGE', asyncDestroyMessage)
    ])
    yield all([
        takeLatest('ASYNC_REQUEST_API', asyncRequestAPI)
    ])
};