import React from "react";
import { jumpToById } from "react-sidenav2";
export default class TopnavFormatter extends React.Component {
    render() {
        return (<div>
            <strong>
                描述
            </strong>
            <pre>
                <code>
                    顶部路由元素格式
                </code>
            </pre>
            <strong>
                定义TopnavFormatter
            </strong>
            <pre>
                <code>
                    {`class TopnavFormatter extends React.Component {
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
            <strong>
                注入的属性
            </strong>
            <pre>
                <code>

                    item:object 对应的<a
                        href="javascript:;"
                        onClick={() => jumpToById({ "routeId": "10" })}
                    >Data</a>路由数据
{`

`}
                    to:string 路由url路径
{`

`}
                    location:object <a
                        href="javascript:;"
                        onClick={() => jumpToById({ "routeId": "11" })}
                    >history</a>的location属性
                    //具体参见https://github.com/ReactTraining/history
{`

`}
                    isActive:bool 是否是被激活状态
                </code>
            </pre>
        </div>)
    }
} 