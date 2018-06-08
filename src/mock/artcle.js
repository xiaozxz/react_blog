
import mockjs, { Random } from 'mockjs';

export default {
    getArtcle:()=>{
        var resData = mockjs.mock({
            code: 10000,
            'data|10': [{
              'title':'@cname',
              'content': '@paragraph',
              'column': '测试栏目',
              'createTime':'@date',
              'id': '@increment',
            }]
          });
        return resData
    }
}