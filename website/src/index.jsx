import path from "path";
import React from "react";
import { render } from "react-dom";
import classnames from "classnames";
import {setup,jumpToById,jumpTo,createSidenav,createTopnav,createSidenavPanel,createCrumbnav} from "../../dist/index";
import {createHashHistory} from "history";
import "./index.css";
let data = [{
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
    },{
        id:"11",
        path:"/history",
        name:"History",
        loader:()=>import("./sidenav-option/modules/history/History")
    },{
        id:"12",
        path:"/nestedProp",
        name:"NestedProp",
        loader:()=>import("./sidenav-option/modules/nestedProp/NestedProp")
    },{
        id:"13",
        path:"/getUserConfirmation",
        name:"GetUserConfirmation",
        loader:()=>import("./sidenav-option/modules/getUserConfirmation/GetUserConfirmation")
    },{
        id:"14",
        path:"/Loading",
        name:"Loading",
        loader:()=>import("./sidenav-option/modules/Loading/Loading")
    },{
        id:"15",
        path:"/panelClassName",
        name:"PanelClassName",
        loader:()=>import("./sidenav-option/modules/panelClassName/PanelClassName")
    },{
        id:"16",
        path:"/topnavActiveClassName",
        name:"TopnavActiveClassName",
        loader:()=>import("./sidenav-option/modules/topnav-active-classname/TopnavActiveClassName")
    }]
},{
    id: "2",
    path: "/sidenav",
    name: "Sidenav",
    loader: () => import('./sidenav/Sidenav'),
    children: [{
        id: "20",
        path: "/SidenavFormatter",
        name: "SidenavFormatter",
        loader: () => import('./sidenav/modules/SidenavFormatter/SidenavFormatter')
    }]
},{
    id:"3",
    path:"/sidenav_panel",
    name:"SidenavPanel",
    loader:() => import('./sidenav-panel/SidenavPanel'),
    children:[{
        id:"30",
        path:"/empty_panel",
        name:"EmptyPanel",
        loader:() => import('./sidenav-panel/modules/empty-panel/EmptyPanel')
    },{
        id:"31",
        path:"/nomatch_panel",
        name:"NoMatchPanel",
        loader:() => import('./sidenav-panel/modules/nomatch-panel/NoMatchPanel')
    },{
        id:"32",
        path:"/panel",
        name:"Panel",
        loader:() => import('./sidenav-panel/modules/panel/Panel')
    }]
},{
    id:"4",
    path:"/top_panel",
    name:"TopPanel",
    loader:() => import('./topnav/Topnav'),
    children:[{
        id:"40",
        path:"/topnav_formatter",
        name:"TopnavFormatter",
        loader:() => import("./topnav/modules/topnav-formatter/TopnavFormatter")
    },{
        id:"41",
        path:"/close_btn_formatter",
        name:"CloseBtnFormatter",
        loader:() => import("./topnav/modules/close-btn-formatter/CloseBtnFormatter")
    }]
},{
    id:"5",
    path:"/crumbnav",
    name:"Crumbnav",
    loader:() => import('./crumbnav/Crumbnav'),
    children:[{
        id:"50",
        path:"/crumbnav_formatter",
        name:"CrumbnavFormatter",
        loader:() => import("./crumbnav/modules/crumbnav-formatter/CrumbnavFormatter")
    }]
},{
    id:"6",
    path:"/jump_to",
    name:"JumpTo",
    loader:() => import('./jump-to/JumpTo')
},{
    id:"7",
    path:"/jump_to_byId",
    name:"JumpToById",
    loader:() => import('./jump-to-byId/JumpToById')
}];
const getUserConfirmation = function (prompt, resolve, reject) {
    if (prompt) {
        const result = window.confirm(prompt);
        result ? resolve() : reject();
    } else {
        resolve();
    }
};
const Loading=({navData})=>{
    return (
        <div>
            {navData.name}页加载中...
        </div>
    )
};
setup({
    data: data,
    history: createHashHistory(),
    nestedProp: "children",
    getUserConfirmation:getUserConfirmation,
    Loading:Loading,
    panelClassName:"panel",
    topnavActiveClassName:"topnav-item-active"
});
const Sidenav = createSidenav();
const Topnav = createTopnav();
const SidenavPanel = createSidenavPanel();
const Crumbnav = createCrumbnav();
class SidenavFormatter extends React.Component {
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
}
render(<Sidenav
    Formatter={SidenavFormatter}
    ulClassName={"sidenav-ul"}
    liClassName={"sidenav-li"}
/>, document.querySelector("#sidenav"));

class EmptyPanel extends React.Component {
    render() {
        return <div>
            请从左侧导航选择模块
        </div>
    }
}
class NoMatchPanel extends React.Component {
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
}
render(<SidenavPanel
    EmptyPanel={EmptyPanel}
    NoMatchPanel={NoMatchPanel}
/>, document.querySelector("#main"));


class TopnavFormatter extends React.Component {
    handler() {
        const { item } = this.props;
        jumpToById({"routeId":item.id});
    }
    render() {
        const { item } = this.props;
        return <span
            className="topnav-item-content"
            onClick={
                this.handler.bind(this)
            }
        >
            {item.name}
        </span>
    }
}
class CloseBtnFormatter extends React.Component {
    render() {
        return (<span>&times;</span>);
    }
}
render(<Topnav
    Formatter={TopnavFormatter}
    CloseBtnFormatter={CloseBtnFormatter}
    className={"topnav-item"}
    closeBtnClassName={"topnav-close"}
/>, document.querySelector("#topnav"));
class CrumbnavFormatter extends React.Component {
    render() {
        const { item } = this.props;
        return item.name;
    }
}
render(<Crumbnav
    className={"crumbnav-item"}
    Formatter={CrumbnavFormatter}
/>, document.querySelector("#crumbnav"));