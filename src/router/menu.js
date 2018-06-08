

import Loadable from 'react-loadable';
import Loading from './Loading';

export const Login = Loadable({ loader: () => import('../views/Login'), loading: Loading, });
export const Home = Loadable({ loader: () => import('../views/Home'), loading: Loading, });
export const notFound = Loadable({ loader: () => import('../views/exception/NotFound'), loading: Loading, });

/**页面动态路由及菜单用信息
 * icon-模块图标，authkey-模块的权限字段，name-模块名称
 * **/

 const Menus={
     'user':{
        'icon': 'profile',
        'name': '权限管理',
        'authKey': 'user',
        'children':{
            'users': {
                'name': '用户管理',
                'path': '/users',
                'component': Loadable({ loader: () => import('../views/user/Index'), loading: Loading, }),
                'authKey': 'userlist',
            },
        }
     },
     'artcle':{
        'icon': 'profile',
        'name': '文章管理',
        'authKey': 'artcle',
        'children':{
            'artcles': {
                'name': '文章列表',
                'path': '/artcles',
                'component': Loadable({ loader: () => import('../views/artcle/Index'), loading: Loading, }),
                'authKey': 'artcleManage',
            },
            'addArtcle': {
                'name': '新增文章',
                'path': '/addArtcle',
                'component': Loadable({ loader: () => import('../views/artcle/addArtcle'), loading: Loading, }),
                'authKey': 'artcleManage',
            },
        }
     },
     'chart':{
        'icon': 'profile',
        'name': '报表管理',
        'authKey': 'chart',
        'children':{
            'artcleChart': {
                'name': '文章报表',
                'path': '/artcleChart',
                'component': Loadable({ loader: () => import('../views/chart/Index'), loading: Loading, }),
                'authKey': 'chartArtcle',
            },
        }
     },
}
export default Menus;