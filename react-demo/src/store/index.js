import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

let store = createStore(reducer,compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));
// let store = createStore(reducer,applyMiddleware(thunk));

export default store; 


/*
    state是存入store里面的数据
    安装react-redux 命令：npm install react-redux --save
*/