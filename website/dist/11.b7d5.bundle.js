(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(6)),l=c(n(5)),r=c(n(4)),u=c(n(3)),o=c(n(2)),i=c(n(1)),d=n(7);function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("strong",null,"描述"),i.default.createElement("pre",null,i.default.createElement("code",null,"定义侧边导航路由元素的格式")),i.default.createElement("strong",null,"定义SidenavFormatter"),i.default.createElement("pre",null,i.default.createElement("code",null,'class SidenavFormatter extends React.Component {\n    handler() {\n        const { item } = this.props;\n        jumpToById({routeId:item.id});\n    }\n    render() {\n        const { item, match } = this.props;\n        return (\n            <div\n                className={classnames("sidenav-item", { "sidenav-item-active": match && match.isExact })}\n                onClick={\n                    this.handler.bind(this)\n                }\n            >\n                {item.name}\n            </div>\n        )\n    }\n}')),i.default.createElement("strong",null,"挂载到Sidenav元素上面"),i.default.createElement("pre",null,i.default.createElement("code",null,"<Sidenav\n    ...\n    Formatter={SidenavFormatter}\n    ...\n/>\n")),i.default.createElement("strong",null,"注入的属性"),i.default.createElement("pre",null,i.default.createElement("code",null,"item:object 在",i.default.createElement("a",{href:"javascript:;",onClick:function(){return(0,d.jumpToById)({routeId:"10"})}},"Data"),"上面定义的对应数据","\n\n","match:object ",i.default.createElement("a",{href:"javascript:;",onClick:function(){return(0,d.jumpToById)({routeId:"11"})}},"history"),"的属性 //具体参见https://github.com/ReactTraining/history","\n\nFormatter:func Sidenav的Formatter属性\n\nhistory:history\n\nliClassName:string\n\nlocation:object history的location属性\n\nnestedProp:string\n\nto:string 该路由对象的路由路径\n\nulClassName:string\n\n")))}}]),t}(i.default.Component);t.default=s}}]);
//# sourceMappingURL=11.b7d5.bundle.js.map