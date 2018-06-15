
### 项目介绍:
  本系统计划做成一个博客管理系统，但又不局限于博客的cms内容管理，项目初步计划有文章管理功能，权限管理功能，图表展示等模块，后期有时间可以建立一些基础表单管理功能，系统使用creacte-react-app搭建，但eject所以实际使用起来跟webpack从头搭建的差别不大，技术方面。系统主要使用：react+redux+antd+react-router4+echart，如果对以上技术不深了解的话，看看建议查看一下相关api。

### 当前进度
  1. 框架搭建，引入antd，搭建路由，完成前端的登录功能，基础的权限管理已经实现。
  2. 引入echart实现基础图表
  3. 引入redux 查找除了redux相关的redux-thunk redux-sage具体操作什么，开始ajax请求调试
  4. mock虚拟数据搭建 
### 后期计划
 
   2. 基础的文章列表和检索功能。
 
   5. node后台功能开发。

# 技术要点

系统主要使用的技术要点有react，redux，redux-saga,antd,immutable,react-router4,echart等技术其中需要注意的有：
## immutable相关
  immutable是一种新的数据机构，他主要有以下几种使用场景：
  1. 替换javascripts编程中json的所有使用场景，包括对象，数组的声明和使用
  2. 可以直接判断两个immutable对象是否相等，从而帮组react组件比较传入参数是否相等，界面是否渲染
  3. 融入模块化和一致化的思路，使对象具有loadash,underscore的基本功能.
  4. 保证函数输入不会发生更改。
### immutable基本使用
1. 声明对象：
<pre><code>
let obj=fromJs({'name':'test'})
<span style="color:#999">//建议使用格式</span>
let array=List([1,2,3])
let obj=Map({'name':'test'});
</code></pre>
2. 获取对象
<pre><code>
let obj=fromJs({name:'test',attr:[{footer:2}]})
obj.get('name');
<span style="color:#999">//test</span>
obj.getIn(['attr'])
<span style="color:#999">//List[{footer:2}]</span>
object.getIn(['attr',0,'foot'])
<span style="color:#999">//2</span>
</code></pre>
3. 修改对象
<pre><code>
 let obj=fromJS({name:'zxz',age:28,attr:['name','age']});
 obj=obj.update('name',value=>'test');
 let obj2=obj.set('attr',Map({'foot':2}));
 obj2=obj2.setIn(['attr','foot'],5)
</code></pre>
4. 比较对象
<pre><code>
 let obj=fromJS({name:'zxz',age:28,attr:['name','age']});
 let obj1=fromJS({name:'zxz',age:28,attr:['name','age']});
 let obj2=obj;
 obj==obj1<span style="color:#999">//false</span>
 obj==obj2<span style="color:#999">//true</span>
 is(obj,obj2)<span style="color:#999">//true</span>
</code></pre>
5. 其他有关对象数组，合并截取等操作参见官网











 



# 文档结构








