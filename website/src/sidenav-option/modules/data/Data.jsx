import React from "react";
import { jumpToById } from "react-sidenav2";
export default class Data extends React.Component {
    render() {
        return (<div>
            <strong>
                基本结构
            </strong>
            <pre>
                <code>
                    {`[{
    id: "-1",
    path: "/",
    name: "简介",
    loader: () => import('./home/Home')
},{
    id: "0",
    path: "/getting_started",
    name: "开始使用",
    loader: () => import('./getting-started/GettingStarted')
}, {
    id: "1",
    path: "/sidenav_option",
    name: "配置",
    loader: () => import('./sidenav-option/SidenavOption'),
    children:[{
        id:"10",
        path:"/data",
        name:"Data",
        loader:()=>import("./sidenav-option/modules/data/Data")
    }]
}]`}
                </code>
            </pre>
            <strong>
                必须属性
            </strong>
            <pre>
                <code>
                    id:string 不可重复
                </code>
            </pre>
            <pre>
                <code>
                    path:string 定义路由使用的路径
                </code>
            </pre>
            <pre>
                <code>
                    name:string 模块名称
                </code>
            </pre>
            <pre>
                <code>
                    loader:func 路由对应的模块,函数返回<a href="javascript:;" onClick={()=>jumpToById({routeId:"32"})}>路由模块</a>的引入
                </code>
            </pre>
            <strong>
                其他属性
            </strong>
            <pre>
                <code>
                    sidenav:bool 是否在侧边导航上面显示该路由,一般用于定义包括修改等不需要在侧边展示的页面的路由
                </code>
            </pre>
            <pre>
                <code>
                    children:array "children"对应于配置中的<a href="javascript:;" onClick={()=>jumpToById({routeId:"12"})}>nestedProp</a>属性值,包含该路由下面的后代路由
                </code>
            </pre>
            <pre>
                <code>
                    *:any 可以有任意多的任意的自定义属性
                </code>
            </pre>
        </div>)

    }
} 