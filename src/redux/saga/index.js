
import artcleMiddleware  from './artcle'

export default function* watchAsync(){
   
    let middlewares=[...artcleMiddleware];
    yield* middlewares ;

}