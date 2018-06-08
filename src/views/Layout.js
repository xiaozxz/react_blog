import React from 'react';
import { Layout, Icon } from 'antd';


import DynamicMenu from '../components/Layout/DynamicMenu'

const { Header, Sider, Content } = Layout;


class Main extends React.Component {
    constructor(props) {
        super(props);
    }
   
    state = {
        collapsed: false,
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render() {
        let LayoutContianer= <Layout className="system-body">
                                    <Sider
                                        trigger={null}
                                        collapsible
                                        collapsed={this.state.collapsed}
                                    >
                                        <div className="menu-logo" />
                                        <DynamicMenu path={this.props.location.pathname}/>
                                    </Sider>
                                    <Layout className="system-right">
                                        <Header  className="system-right-header">
                                            <Icon
                                                className="collapsed-icon"
                                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                                onClick={this.toggle}
                                            />
                                        </Header>
                                        <div id='container'></div>
                                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                                            {this.props.routes || null}
                                        </Content>
                                    </Layout>
                               </Layout>
        return (
           <div>
               {LayoutContianer}
           </div>
        )
    }
}

export default Main;
