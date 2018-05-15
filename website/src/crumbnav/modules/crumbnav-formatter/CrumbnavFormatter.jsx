import React from "react";
import { jumpToById } from "../../../../../dist";
export default class CrumbnavFormatter extends React.Component {
    render() {
        return (<div>
            <strong>
                描述
            </strong>
            <pre>
                <code>
                    面包屑元素格式
                </code>
            </pre>
            <strong>
                定义CrumbnavFormatter
            </strong>
            <pre>
                <code>
                    {`class CrumbnavFormatter extends React.Component {
    render() {
        const { item } = this.props;
        return item.name;
    }
}`}
                </code>
            </pre>
            <strong>
                挂载到Crumbnav元素上面
            </strong>
            <pre>
                <code>
                    {`<Crumbnav
    ...
    Formatter={CrumbnavFormatter}
    ...
/>
`}
                </code>
            </pre>
            <strong>
                注入的属性
            </strong>
            <pre>
                <code>

                    item:object 对应的<a
                        href="javascript:;"
                        onClick={() => jumpToById({ "routeId": "10" })}
                    >Data</a>路由数据
                </code>
            </pre>
        </div>)
    }
} 