
import { combineReducers } from 'redux-immutable'
import { List } from 'immutable'

const Artcle = (state = List([]), action) => {
    switch (action.type) {
      case 'ADD_ARTCLE':
        return state.push(action.artcle);
      case 'DIS_ADD_ARTCLE':
         debugger
        return state.push(action.artcle);
     case 'SET_ARTCLES':
        return action.data;
      default:
        return state
    }
  }
  
export default {Artcle}