import React from "react";
import { jumpToById } from "../../../dist/index";
export default class SidenavOption extends React.Component {
    render() {
        return (<div>
            <strong>
                引入配置函数
            </strong>
            <pre>
                <code>
                    {`import {setup} from "react-sidenav2";`}
                </code>
            </pre>
            <strong>
                配置
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
                配置参数
            </strong>
            <ul>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "10" }) }}>
                        data
                </a>
                </li>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "11" }) }}>
                        history
                </a>
                </li>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "12" }) }}>
                        nestedProp
                </a>
                </li>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "13" }) }}>
                        getUserConfirmation
                </a>
                </li>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "14" }) }}>
                        Loading
                </a>
                </li>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "15" }) }}>
                        panelClassName
                </a>
                </li>
                <li>
                    <a href="javascript:;" onClick={() => { jumpToById({ "routeId": "16" }) }}>
                        topnavActiveClassName
                </a>
                </li>
            </ul>
        </div>)

    }
} 