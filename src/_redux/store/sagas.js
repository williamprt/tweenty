import { takeLatest, all, put, call } from 'redux-saga/effects'
import api from '../../services/axios';

/*function getApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let date = new Date();
            let time = date.getUTCDate()
            resolve({_id: Math.random(), message: 'Hello World', createdAt: time})
        }, 1000)
    })
}*/

/*function postApi(action) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let date = new Date();
            let time = date.getUTCDate()
            resolve({_id: Math.random(), message: action.payload.message, createdAt: time})
        })
    }, 1000)
}*/

function* asyncSendMessage(action) {
    try {
        const response = yield call(api.post, 'posts', {
            message: action.payload.message
        });
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
        const response = yield call(api.delete, `posts/${action.payload.id}`)
        let { _id: id } = response.data

        yield put({
            type: 'DESTROY_MESSAGE',
            payload: {
                id,
            }
        })
    } catch (error) {
        
    }
}

function* asyncRequestAPI(action) {
    try {
        let prevPage = 0; let nextPage = 0; let totalPages = 0; let page = 0;

        yield put({
            type: 'LOADING_API',
            payload: {
                loading: { _id: Math.random(), message: 'Loading...' },
                infos: { prevPage, nextPage, totalPages, page }
            }
        })
    } finally {
        try {
            const response = yield call(api.get, `posts?page=${action.payload.page}`)
            let { docs, prevPage, nextPage, totalPages, page } = response.data;

            yield put({
                type: 'SUCCESS_API',
                payload: {
                    data: docs,
                    infos: { prevPage, nextPage, totalPages, page },
                }
            })
        } catch {
            const error = new Error('Something`s going wrong! It`s not possible to establish an API connection.')
            let error_message = error.message.toString();
            let prevPage = 0; let nextPage = 0; let totalPages = 0; let page = 0;

            yield put({
                type: 'FAILURE_API',
                payload: {
                    message: error_message,
                    infos: { prevPage, nextPage, totalPages, page }
                }
            })
        }
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