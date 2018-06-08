import { notification } from 'antd';
import { fromJS } from 'immutable'
import { stringify } from 'qs'
/**
 * 
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object} [opts]          An object can containing either "requestHeader" or "async typr"
 */

const ajaxData = {
  getPromise: (base, opts) => {
    return new Promise(function (resove, reject) {
      var xmlHttp = new XMLHttpRequest();
     
      var postData = base.data;
      var postType = base.method.toUpperCase();

      var params = [];
      
      for (var key in postData) {
        if (postData[key]!=null || postData[key] === 0) {
          params.push(key + '=' + postData[key]);
        }
      };
      
      let urlParams = params.join('&');

      if (postType != 'POST'){

        if(postType == 'PUT'){
          if(opts && opts.header['Content-Type'].indexOf('application/json') != -1){
              postData=JSON.stringify(postData);
          }else{
              base.url = (urlParams ? base.url + '?' + urlParams : base.url);
              postData = null;
          }
        }

      }else{
        opts=opts?opts:{};
        opts.header=opts.header?opts.header:{'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'};
        if(opts.header['Content-Type'].indexOf('application/json')==-1){
          postData = urlParams;
        }else{
          postData=JSON.stringify(postData);
        }
      }

      xmlHttp.open(postType, base.url, true);
      let userPower=window.userPower
      if(userPower!=null){
        xmlHttp.setRequestHeader('MyToken', window.userPower.MyToken)
      }
      
      if (opts && opts.hasOwnProperty('header')) {
        for (var key in opts.header) {
          xmlHttp.setRequestHeader(key, opts.header[key]);
        }
      }

      xmlHttp.send(postData);
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          let ret = JSON.parse(xmlHttp.responseText);
          
          if (opts && opts.notFiler) {
            resove(ret);
          } else {
            if (ret.code == 10000 || ret.code == 11050 || ret.code == 10077) {
              //ret.data.;
              ret.success = true;
              ret=fromJS(ret);
              resove(ret);
            } else {
              notification['error']({
                message: `系统消息`,
                description: ret.msg,
              });
              reject(fromJS({ success: false, data:{msg: ret.msg} }));
            }
          }

        } else if (xmlHttp.readyState == 4) {
          notification['error']({
            message: `系统消息`,
            description: '系统错误，请稍后重试！',
          });
          let ret = JSON.parse(xmlHttp.responseText);
          reject(fromJS({ success: false, data:{msg: ret.msg} }));
        }
      };
    });
  },

  http: async function (base, opts) {
    if (opts && opts.async) {//返回一个promise
      return this.getPromise(base, opts);
    } else {//返回一个结果；
      let data;
      try {
        data = await this.getPromise(base, opts);
      } catch (e) {
        data = e;
      }
      return data;
    }
  },
  get: function (url, opts) {
    return ajaxData.http({ method: "get", url: url }, opts);
  },
  post: function (url, data, opts) {
    return ajaxData.http({ method: "post", url: url, data: data }, opts);
  },
  del: function (url, opts) {
    return ajaxData.http({ method: "delete", url: url }, opts);
  },
  put: function (url, data, opts) {
    return ajaxData.http({ method: "put", url: url, data: data }, opts);
  }
}

export default ajaxData;

