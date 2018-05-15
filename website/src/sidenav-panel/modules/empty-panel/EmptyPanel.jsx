import React from "react";
import { jumpToById } from "../../../../../dist";
export default class EmptyPanel extends React.Component {
    render() {
        return (<div>
            <strong>
                描述
            </strong>
            <pre>
                <code>
                    没有任何路由面板被使用时展示的面板
                </code>
            </pre>
            <strong>
                定义EmptyPanel
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
                挂载到SidenavPanel元素上面
            </strong>
            <pre>
                <code>
                    {`<SidenavPanel
    ...
    EmptyPanel={EmptyPanel}
    ...
/>
`}
                </code>
            </pre>
        </div>)
    }
} 