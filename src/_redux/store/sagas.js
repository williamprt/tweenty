import { takeLatest, all, put, call } from 'redux-saga/effects'
import api from '../../services/axios';

function* asyncSendMessage(action) {
    try {
        const response = yield call(api.post, '/posts', {
            message: action.payload.message
        })
        let { _id: id, message } = response.data
        yield put({
            type: 'SEND_MESSAGE',
            payload: {
                id,
                message
            }
        })
    } catch (error) {

    }
};

function* asyncDestroyMessage(action) {
    try {
        yield call(api.delete, `/posts/${action.payload.id}`)
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