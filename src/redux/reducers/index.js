
import { combineReducers } from 'redux-immutable'
import { Map } from 'immutable'

import artcle from './artcle'

// const Artcle = (state = List([]), action) => {
//     switch (action.type) {
//       case 'ADD_ARTCLE':
//         return state.push(action.artcle);
//       default:
//         return state
//     }
//   }
const loading=(state = Map({}), action)=>{
     switch (action.type) {
       case 'ADD_LOADING':
           return state.set(action.type,action.value)
         break;
     
       default:
         break;
     }
}
  
  const AppDo = combineReducers({
    ...artcle
  })
  export default AppDo