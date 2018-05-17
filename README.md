# react-sidenav2
react导航组件

**Install**

```js
npm install --save react-sidenav2
```  
**Usage**
```js
//引入
import {setup,jumpToById,jumpTo,createSidenav,createTopnav,createSidenavPanel,createCrumbnav} from "react-sidenav2";

//定义导航数据
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
    path: "/sidenav_home",
    name: "Sidenav简介",
    loader: () => import('./sidenav-home/SidenavHome'),
    children: [{
        id: "11",
        path: "/sidenav_option",
        name: "Sidenav配置",
        loader: () => import('./sidenav-home/modules/sidenav-option/SidenavOption')
    }]
}];

//关闭页签时的询问函数
const getUserConfirmation = function (prompt, resolve, reject) {
    if (prompt) {
        const result = window.confirm(prompt);
        result ? resolve() : reject();
    } else {
        resolve();
    }
};

//页面加载时使用的加载页
const Loading=({navData})=>{
    return (
        <div>
            {navData.name}页加载中...
        </div>
    )
};

//初始化导航组件
setup({
    data: data,
    history: createHashHistory(),
    nestedProp: "children",
    getUserConfirmation:getUserConfirmation,
    Loading:Loading,
    panelClassName:"panel",
    topnavActiveClassName:"topnav-item-active"
});

//生成侧边导航组件
const Sidenav = createSidenav();

//侧边导航定义格式
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

//挂载侧边导航组件
render(<Sidenav
    Formatter={SidenavFormatter}
    ulClassName={"sidenav-ul"}
    liClassName={"sidenav-li"}
/>, document.querySelector("#sidenav"));

//生成导航面板组件
const SidenavPanel = createSidenavPanel();

//无导航面板被选中时展示的面板
class EmptyPanel extends React.Component {
    render() {
        return <div>
            请从左侧导航选择模块
        </div>
    }
}

//导航路径错误时展示的面板
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

//挂载导航面板
render(<SidenavPanel
    EmptyPanel={EmptyPanel}
    NoMatchPanel={NoMatchPanel}
/>, document.querySelector("#main"));
```  
**包含的组件和方法**

- sidenav 侧边导航
- sidenav-panel 导航面板
- topnav 顶部导航
- crumbnav 面包屑导航
- jumpTo 跳转方法
- jumpToById 根据导航数据id进行跳转的方法

[具体参见文档](https://liyongleihf2006.github.io/react-sidenav2/website/dist/index.html)