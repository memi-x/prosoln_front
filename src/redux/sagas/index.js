import { all } from 'redux-saga/effects'
import { watchFetchLinks } from './linksSagas';

function* rootSaga(){
    yield all([
        watchFetchLinks()
    ])
}

export default rootSaga;