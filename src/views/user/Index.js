import React from 'react'
import{ Map,List,fromJS,is } from 'immutable';
import Children from '../../components/artcle/children'

function Index(props) {
  let obj=fromJS({name:'zxz',age:28,attr:['name','age']});
  let obj1=fromJS({name:'zxz',age:28,attr:['name','age']});
  let obj5=obj1;
  let c=is(obj,obj1);
  obj=obj.update('name',value=>'test');
  let obj2=obj.set('attr',Map({'foot':2}));
  obj2=obj2.setIn(['attr','foot'],5)
  let obj3=obj;
  let res=obj3==obj;

  let list = List([ obj, obj2 ]);
   //let rest =  List([ obj, ibj2 ]);
   let data={children:[]}
  return(
      <div className="auth-page">
         <div className="title">用户主页</div>
        <Children data={data}></Children>
         <div className="content">
         <div>
             {obj.keyOf('name')}
         </div>
         {obj2.getIn(['attr','foot'])}
         {res.toString()}
             {
               list.map((item,index)=>(<div key={index}>{item.get('name')}</div>))
             }
         </div>
      </div>
  )
}
export default Index;