import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu;

function getMenus(path) {
    let menus = [];
    let systemMenu = window.systemMenu;
    systemMenu.childrenAuthKeys.map(moduleKey => {
        let currentItem = systemMenu[moduleKey]
        let subMenuItem =
            <SubMenu key={moduleKey} title={<span><Icon type={currentItem.icon} /><span>{currentItem.name}</span></span>}>
                {
                    currentItem.children.childrenAuthKeys.map(key => {
                        return (
                            <Menu.Item key={'/' + key}>
                                <Link to={'/' + key} replace={('/' + key)===path}>
                                    <span className="nav-text">{currentItem.children[key].name}</span>
                                </Link>
                            </Menu.Item>
                        )
                    })
                }
            </SubMenu>;
        menus.push(subMenuItem);
    })
    return menus;
}

function DynamicMenu(props) {
    //{'key':'artcles','name':'文章'},{'key':'users','name':'权限'},{'key':'artcleChart','name':'报表'},
  
    let menus = getMenus(props.path)

    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[props.path]}>
            {
                menus.map(menu => (
                    menu
                ))
            }
        </Menu>

    )
}
export default DynamicMenu;