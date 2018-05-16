import React from "react";
import { jumpToById } from "react-sidenav2";
export default class Home extends React.Component {
    render() {
        return (<div>
            <strong>react 导航组件</strong>
            <ul>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "0" }) }}>
                        开始使用
                </a>
                </li>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "1" }) }}>
                        配置
                </a>
                </li>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "2" }) }}>
                        Sidenav
                </a>
                    侧栏导航组件
                </li>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "3" }) }}>
                        SidenavPanel
                </a>
                    内容面板组件
                </li>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "4" }) }}>
                        Topnav
                </a>
                    顶部导航组件
                </li>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "5" }) }}>
                        Crumbnav
                </a>
                    面包屑导航组件
                </li>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "6" }) }}>
                        jumpTo
                </a>
                    页面跳转方法
                </li>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "7" }) }}>
                        jumpToById
                </a>
                    根据id跳转方法
                </li>
            </ul>
        </div>)
    }
} 