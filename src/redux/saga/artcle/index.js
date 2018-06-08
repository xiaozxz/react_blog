//import {takeLatest} from 'redux-saga'
import {take, put, call, fork,cancel,takeLatest} from 'redux-saga/effects'
import {setArtcles,addArtcle,addLoading} from '../../actions'
import ajaxData from '../../../util/request'
import { Map,List } from 'immutable'


export function* asyncGetArtcles(action) {
    
    yield put(addLoading({type:action.type,value:true}));
    
    let artcles = yield call(ajaxData.get,'api/getarticle');
    
    if(artcles.get('success')){
        yield put(setArtcles(artcles.get('data')));
    }
    
    yield put(addLoading({type:action.type,value:false}))
   
}
export function * asyncAddArtcle(action) {
    let obj = Map({
        'title': 'test',
        'content': '这个内容是通过middleware2过来的'
    })
    yield put(addArtcle(obj));
}
// function * asyncAddArtcleT(action) {
//     let obj = Map({
//         'title': '标题2',
//         'content': '这个内容是通过middleware2过来的'
//     })
//     yield put(addArtcle(obj));
// }

function* takeFirst(pattern, saga, ...args) {
    let lastTask
    while (true) {
        const action = yield take(pattern)
    
        if(lastTask)
         yield cancel(lastTask) // 如果任务已经终止，取消就是空操作
        
      lastTask = yield call(saga, ...args.concat(action))
    }
}
const artcleMiddleware = [
    takeLatest('ADD_ARTCLE_ASYNC', asyncAddArtcle),
    //takeLatest('ADD_ARTCLE_ASYNCT', asyncAddArtcleT),
    takeLatest('GET_ARTCLES', asyncGetArtcles),
    
    //takeLatest('ADD_ARTCLE_ASYNC',asyncAddArtcle),

];

export default artcleMiddleware;