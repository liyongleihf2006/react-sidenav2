import React from "react";
import { jumpToById } from "../../../../../dist";
export default class Panel extends React.Component {
    render() {
        return (<div>
            <strong>
                描述
            </strong>
            <pre>
                <code>
                    路由指向的每一个模块面板
                </code>
            </pre>
            <strong>
                定义Panel
            </strong>
            <pre>
                <code>
                    {`class DemoPanel extends React.Component {
    render() {
        return <div>
            我是一个示例面板 Hello World!
        </div>
    }
}`}
                </code>
            </pre>
            <strong>
                注入的属性
            </strong>
            <pre>
                <code>
                    setPrompt:func 关闭该面板时进行询问调用的函数,
                    传入的参数将会作为调用
                <a
                        href="javascript:;"
                        onClick={() => jumpToById({ "routeId": "13" })}
                    >getUserConfirmation</a>时注入的的第一个参数
                    {`

`}
                    <a
                        href="javascript:;"
                        onClick={() => jumpToById({ "routeId": "11" })}
                    >history</a>
                    //具体参见https://github.com/ReactTraining/history
                    {`

`}
                    navData:object 该模块面板对应的<a
                        href="javascript:;"
                        onClick={() => jumpToById({ "routeId": "10" })}
                    >Data</a>路由数据
{`

`}
                    params:any 调用<a
                        href="javascript:;"
                        onClick={() => jumpToById({ "routeId": "7" })}
                    >jumpToById</a>时传入的params参数
                </code>
            </pre>
        </div>)
    }
} 