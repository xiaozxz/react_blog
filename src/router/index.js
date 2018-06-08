import React from 'react'
import { HashRouter,BrowserRouter } from 'react-router-dom';
import getAllRouteAndMenus, {}from './menuTool'

//import Login from '../views/Login'

export default () => {
    // const Auth = Loadable({ loader: () => import('../views/auth/Index'), loading: Loading, });
    // const Artcle = Loadable({ loader: () => import('../views/artcle/Index'), loading: Loading, });
    // const Chart = Loadable({ loader: () => import('../views/chart/Index'), loading: Loading, });
    
    let userInfo = window.userInfo;
    let {routeMain,sysMenus} = getAllRouteAndMenus(userInfo);
    if(sysMenus!=null){
        window.systemMenu = sysMenus;//将数据缓存到全局
    }
    return (
        <HashRouter>
            {
                routeMain
            }
        </HashRouter>
    )
}

