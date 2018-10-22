import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_LINKS } from '../constants/actionTypes';
import { getLinksAPI } from '../../services/linksServices';
import { fetchLinksSuccess, fetchLinksFailure } from '../actionCreators/linksActions';

export function* fetchLinksSaga() {
    try{
        const response = yield call(getLinksAPI)
        const { data } = response;
        yield put(fetchLinksSuccess(data))
        console.log('links', data.links)
    } catch (error){
        yield put(fetchLinksFailure(error))
    }
}

export function* watchFetchLinks(){
    yield takeLatest(FETCH_LINKS, fetchLinksSaga)
}