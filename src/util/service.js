/**
 * @author :zxz
 * @createTime : 2018/2/9
 * @desc : 运营系统原有resful相关接口管理模块
 */
import ajaxRequest from './request';
//import  commonApiPathPrefix  from '../utils/modulesApiPrefix'


let commonApiPathPrefix='';

/** -----公用接口模块接口-------**/
//添加参数
export function getResfulParams(requestObj,sign) {
    sign = !sign ? '/' : sign;
    if (!requestObj) {
        throw "参数对象不存在..."
    }
    var str = "";
    for (var k in requestObj) {
        if (requestObj[k]) {
            str += sign + requestObj[k];
        } else {
            if (typeof requestObj[k] == 'string') {//字符串类型

                str += sign + 'null';
            } else if (typeof requestObj[k] == 'number') {
                str += sign + 0;
            } else {
                throw "参数类型错误"
            }
        }
    }
    return str;
  // let urlParam='';
  // for(let key in param){
  //   urlParam+='/'+param[key];
  // }
  // return urlParam;
}
//设置将参数合并到url resful
export function setResfulParamInUrl(param){
  for(var key in param){
    if(param[key]!=''&&param[key]!=null){
      url+=param[key];
    }
  }
  return url;
}
//设置将参数合并到url
export function setParamInUrl(param){
  let url='';
  for(var key in param){
    if(param[key]!==''&&param[key]!=null){
      url+=key+'='+param[key]+'&';
    }
  }
  return url.substring(0,url.length-1);
}
//公用post请求
export async function postQuery(prefixType,url,param,header) {
  url=commonApiPathPrefix[prefixType]+url;
  let response=await ajaxRequest.post(url,param,header)
  return response;
}
//公用get请求
export async function getQuery(prefixType,url,header) {
  url=commonApiPathPrefix[prefixType]+url;
  let response=await ajaxRequest.get(url,header)
  return response;
}
//公用get请求
export async function putQuery(prefixType,url,param,header) {
    url=commonApiPathPrefix[prefixType]+url;
    let response=await ajaxRequest.put(url,param,header)
    return response;
}