import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducer';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);
export {store};

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//     reducers,
//     applyMiddleware(sagaMiddleware)
// );
// sagaMiddleware.run(sagas);

// export { store };