import React from 'react'
import { connect } from 'react-redux'
import {getArtcles, addArtcle } from '../../redux/actions'
import { asyncAddArtcle } from '../../redux/saga/artcle'
import  ArtcleTable  from '../../components/artcle/ArtcleTable'
import Input from '../../components/artcle/input'
import { fromJS } from '../../../../../../../Library/Caches/typescript/2.8/node_modules/immutable';


//var test;
class Artcle extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    //this.props.dispatch(getArtcles());
  }
  addArtcle=()=>{
    this.props.dispatch(addArtcle(fromJS({
      'title': 'test',
      'content': '这个内容是通过middleware2过来的'
  })));
  }
  render(){
    let { artcles }=this.props;
    return(
      <div className="auth-page">
            <div>
                文章页面
            </div>
           <button onClick={()=>{this.addArtcle()}}>新增</button>
            <div>
                <ArtcleTable data={ artcles }/>
            </div>
            
      </div>
    )
  }
}
// function Artcle({artcles,dispatch}) {
  
//   function click(){
//   test= setInterval(() => {
//       dispatch({type:'ADD_ARTCLE_ASYNCT'})
//     }, 1);
//   }

//   function stopClick(){
//     clearInterval(test);
//   }
//   return(
//       <div className="auth-page">
//             <div>
//             <button onClick={()=>{dispatch(addArtcle("新的","内容1"))} }>新增</button> */}
//             <button onClick={()=>{dispatch(addArtcle({title:"新的",content:"内容1"}))} }>新增</button> 
//             <button onClick={()=>{dispatch({type:'ADD_ARTCLE_ASYNC'})} }>异步新增</button> 
//             <button onClick={()=>{click()} }>异步新增2</button> 
//             <button onClick={()=>{stopClick()} }>停止</button> 
//             </div>

//             <div>
//                 <ArtcleTable data={ artcles }/>
//             </div>
//               {
//                 artcles&&artcles.map((ele,index)=>(
//                    <div key={index}>标题：{ele.get('title')};内容：{ele.get('content')}</div>
//                 ))
//               }
//       </div>
//   )
// }
const mapStateToProps = state => {
  
  return {
    artcles: state.get('Artcle')
  }
}

export default connect(
  mapStateToProps,
)(Artcle);