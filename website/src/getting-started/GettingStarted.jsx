import React from "react";
import { jumpToById } from "react-sidenav2";
export default class GettingStarted extends React.Component {
    render() {
        return (<div>
            <strong>
                项目结构
            </strong>
            <pre>
                <code>
                    {
                        `
     |- getting-started
     |     |
     |     |- GettingStarted.jsx
     |
     |- home
     |     |
     |     |- Home.jsx
     |
     |- sidenav-home
     |     |
     |     |- modules
     |     |     |
     |     |     |- sidenav-option
     |     |            |
     |     |            |- SidenavOption.jsx
     |     |
     |     |- SidenavHome.jsx
     |     
     |- index.css
     |
     |- index.html
     |
     |- index.jsx
    `
                    }
                </code>
            </pre>
            <strong>
                index.html结构
            </strong>
            <pre>
                <code>
                    {`
    <div id="sidenav" class="sidenav-container"></div>
    <div class="content">
        <div id="topnav" class="topnav-container"></div>
        <div id="crumbnav" class="crumbnav-container"></div>
        <div id="main" class="main"></div>
    </div>`}
                </code>
            </pre>
            <strong>
                注意
            </strong>
            <p>
                
            </p>
            <b>整个组件没有提供任何样式,
                样式需要开发者自己书写,
                实际项目中请自己定义合适的样式,
                下面是示例中使用的所有的样式
            </b>
            <pre>
            <code>
                {`/* 侧边导航 */
.sidenav-container{
    position: fixed;
    width: 220px;
    border-right: 1px solid #f3f3f3;
    padding-right: 20px;
    height: 100%;
}
.sidenav-ul{
    list-style: none;
    padding-left: 0;
    margin:0;
}
.sidenav-li{
    padding-left: 10px;
    line-height: 40px;
}
.sidenav-item{
    padding-left: 10px;
    border-radius: 8px;    
}
.sidenav-item-active{
    background:lightpink;
}
/* 右侧容器 */
.content{
    margin-left: 240px;
    overflow:auto;
}
/* 顶部导航 */
.topnav-container{
    background: #00B7AC;
    overflow: auto;
    white-space: nowrap;
}
.topnav-item{
    padding:17px;
    color:white;
    display:inline-block;
    cursor: pointer;
}
.topnav-item-active{
    background: #159E96;
}
.topnav-close{
    margin-left: 4px;
}
.topnav-item:not(:hover) .topnav-close{
    visibility: hidden;
}
/* 面包屑导航 */
.crumbnav-container{
    padding: 8px 15px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    color: #337ab7;
}
.crumbnav-item{
    cursor: pointer;
}
.crumbnav-item+.crumbnav-item::before{
    padding: 0 5px;
    color: #ccc;
    content: "/\00a0";
}
.crumbnav-item:last-child{
    color:#777;
}
/* 为了写文档,额外的样式 */
pre{
    padding: 1.25rem 1.5rem;
    line-height: 1.25;
    background: #f3f3f3;
    border-radius: 3px;
    overflow-x: auto;
    font-family: monospace,monospace;
}`}
            </code>
            </pre>
            
            <strong>
                安装
            </strong>
            <pre>
                <code>
                    npm install --save react-sidenav2
                </code>
            </pre>
            <strong>
                引入
            </strong>
            <pre>
                <code>
                    {`import {setup,jumpToById,jumpTo,createSidenav,createTopnav,createSidenavPanel,createCrumbnav} from "react-sidenav2";`}
                </code>
            </pre>
            <strong>
                定义导航数据
            </strong>
            <pre>
                <code>
                    {
                        `let data = [{
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
                path: "/sidenav_home",
                name: "Sidenav简介",
                loader: () => import('./sidenav-home/SidenavHome'),
                children: [{
                    id: "11",
                    path: "/sidenav_option",
                    name: "Sidenav配置",
                    loader: () => import('./sidenav-home/modules/sidenav-option/SidenavOption')
                }]
            }];`
                    }
                </code>
            </pre>
            <strong>
                关闭页签时的询问函数
            </strong>
            <pre>
                <code>
                    {`const getUserConfirmation = function (prompt, resolve, reject) {
    if (prompt) {
        const result = window.confirm(prompt);
        result ? resolve() : reject();
    } else {
        resolve();
    }
};`}
                </code>
            </pre>
            <strong>
                页面加载时使用的加载页
            </strong>
            <pre>
                <code>
                    {`const Loading=({navData})=>{
    return (
        <div>
            {navData.name}页加载中...
        </div>
    )
};`}
                </code>
            </pre>
            <strong>
                初始化导航组件
            </strong>
            <pre>
                <code>
                    {`setup({
    data: data,
    history: createHashHistory(),
    nestedProp: "children",
    getUserConfirmation:getUserConfirmation,
    Loading:Loading,
    panelClassName:"panel",
    topnavActiveClassName:"topnav-item-active"
});`}
                </code>
            </pre>
            <strong>
                生成侧边导航组件
            </strong>
            <pre>
                <code>
                    {`const Sidenav = createSidenav();`}
                </code>
            </pre>
            <strong>
                侧边导航定义格式
            </strong>
            <pre>
                <code>
                    {`class SidenavFormatter extends React.Component {
    handler() {
        const { item } = this.props;
        jumpToById({routeId:item.id});
    }
    render() {
        const { item, match } = this.props;
        return (
            <div
                className={classnames("sidenav-item", { "sidenav-item-active": match && match.isExact })}
                onClick={
                    this.handler.bind(this)
                }
            >
                {item.name}
            </div>
        )
    }
}`}
                </code>
            </pre>
            <strong>
                挂载侧边导航组件
            </strong>
            <pre>
                <code>
                    {`render(<Sidenav
    Formatter={SidenavFormatter}
    ulClassName={"sidenav-ul"}
    liClassName={"sidenav-li"}
/>, document.querySelector("#sidenav"));`}
                </code>
            </pre>
            <strong>
                生成导航面板组件
            </strong>
            <pre>
                <code>
                    {`const SidenavPanel = createSidenavPanel();`}
                </code>
            </pre>
            <strong>
                无导航面板被选中时展示的面板
            </strong>
            <pre>
                <code>
                    {`class EmptyPanel extends React.Component {
    render() {
        return <div>
            请从左侧导航选择模块
        </div>
    }
}`}
                </code>
            </pre>
            <strong>
                导航路径错误时展示的面板
            </strong>
            <pre>
                <code>
                    {`class NoMatchPanel extends React.Component {
    render() {
        const { pathname, history } = this.props;
        return <div>
            无法找到路径"{pathname}"!
            <button onClick={
                () => {
                    history.goBack();
                }
            }>退后</button>
        </div>
    }
}`}
                </code>
            </pre>
            <strong>
                挂载导航面板
            </strong>
            <pre>
                <code>
                    {`render(<SidenavPanel
    EmptyPanel={EmptyPanel}
    NoMatchPanel={NoMatchPanel}
/>, document.querySelector("#main"));`}
                </code>
            </pre>
        </div>)
    }
} 