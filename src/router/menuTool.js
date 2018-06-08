import React from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import Menus,{Login,Home,notFound} from './menu'
import Layout from '../views/Layout'



//根据权限过滤菜单
const getSystemMenu=(item, power)=>{
    //let power = window.userInfo.auth;
    
    let systemMenu = { childrenKeys: [], childrenAuthKeys: [] };//菜单变量加上子项键的数组
    for (var key in item) {
        if (item[key].authKey) {
            if (power.indexOf(item[key].authKey) > -1) {
                systemMenu.childrenKeys.push(key);
                systemMenu.childrenAuthKeys.push(key);
                systemMenu[key] = item[key];
                if (item[key].children) {
                    systemMenu[key].children = getSystemMenu(item[key].children, power);
                }
            }
        } else {//不存在的权限的可直接加入
            systemMenu.childrenKeys.push(key);
            systemMenu[key] = item[key];
        }
    }

    return systemMenu;
}
//获取登录后的路由
export function getPowerRoutes(systemMenu) {
    let powerRoutes = [];
    systemMenu.childrenKeys.forEach(item => {
        let ele = systemMenu[item].children;
        ele.childrenKeys.forEach(function (key) {
            powerRoutes.push(<Route exact key={key} path={ele[key].path} component={ele[key].component} />)
        })
    });

    return powerRoutes
}

//获取登录后的路由
const getAllRouteAndMenus = (userInfo) => {
    
    let routeMain;
    let powerRoutes;
    let sysMenus;
    if (userInfo!=null && userInfo.isLogin) {
        sysMenus = getSystemMenu(Menus, userInfo.auth)
        powerRoutes = getPowerRoutes(sysMenus);
        let routes= <Switch>
                        <Route exact path="/" component={Home} />
                                {
                                    powerRoutes.map(route => (
                                        route
                                    ))
                                }
                        <Route path="/404" component={notFound} replace />
                    </Switch>
        routeMain = <Route path="/"  render={props => (<Layout {...props} routes={routes}/>)}/>//嵌套路由处理
    } else {
        routeMain = <Switch>
                        <Route path="/login" component={Login} replace />
                        <Route path="*" render={() => <Redirect to="/login" />} />
                    </Switch>
    }
    return { routeMain, sysMenus };
}

export default getAllRouteAndMenus;