import React from "react";
import { jumpToById } from "react-sidenav2";
export default class CloseBtnFormatter extends React.Component {
    render() {
        return (<div>
            <strong>
                描述
            </strong>
            <pre>
                <code>
                    顶部路由元素关闭按钮格式
                </code>
            </pre>
            <strong>
                定义CloseBtnFormatter
            </strong>
            <pre>
                <code>
                    {`class CloseBtnFormatter extends React.Component {
    render() {
        return (<span>&times;</span>);
    }
}`}
                </code>
            </pre>
            <strong>
                挂载到Topnav元素上面
            </strong>
            <pre>
                <code>
                    {`<Topnav
    ...
    Formatter={TopnavFormatter}
    ...
/>
`}
                </code>
            </pre>
        </div>)
    }
} 