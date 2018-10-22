import { createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import rootReducer from '../reducers/index';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancerTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancerTool(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store;