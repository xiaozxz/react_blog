import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import AppDo from './redux/reducers';
import Entry from './router';
import saga from './redux/saga';
//import TestRouter from './TestRouter'
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
//import registerServiceWorker from './registerServiceWorker';
import './style/style.less';
import './mock'

window.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
if (!(window.userInfo)) {
    window.userInfo = {
        isLogin: false
    };
}

let sagaMiddle = createSagaMiddleware();
let store = createStore(AppDo, applyMiddleware(sagaMiddle));
sagaMiddle.run(saga)
//sagaMiddle.runSaga(asyncForkAddArtcle)
ReactDOM.render(
    <LocaleProvider locale={zh_CN}>
    <Provider store={store}>
        <Entry/>
    </Provider>
</LocaleProvider>, document.getElementById('root'));

// ReactDOM.render(<TestRouter></TestRouter>,document.getElementById('root'));
// registerServiceWorker();