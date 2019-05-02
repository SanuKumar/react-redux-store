import { createStore, compose } from 'redux';
import { RootReducer } from './RootReducer';

const ConfigureStore = (InitialState) => {
    let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //for using the redux dev tools
    return createStore(RootReducer, InitialState, composeEnhancer()) //createStore accept (rootreducer, initialState)
}

export {
    ConfigureStore
}