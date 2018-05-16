import React from "react";
import { jumpToById } from "react-sidenav2";
export default class SidenavFormatter extends React.Component {
    render() {
        return (<div>
            <strong>
                描述
            </strong>
            <pre>
                <code>
                    定义侧边导航路由元素的格式
                </code>
            </pre>
            <strong>
                定义SidenavFormatter
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
                挂载到Sidenav元素上面
            </strong>
            <pre>
                <code>
                    {`<Sidenav
    ...
    Formatter={SidenavFormatter}
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
                    item:object 在<a
                        href="javascript:;"
                        onClick={() => jumpToById({ "routeId": "10" })}
                    >Data</a>上面定义的对应数据
{`

`}
                    match:object <a
                        href="javascript:;"
                        onClick={() => jumpToById({ "routeId": "11" })}
                    >history</a>的属性
                    //具体参见https://github.com/ReactTraining/history
{`

Formatter:func Sidenav的Formatter属性

history:history

liClassName:string

location:object history的location属性

nestedProp:string

to:string 该路由对象的路由路径

ulClassName:string

`}

                </code>
            </pre>
        </div>)
    }
} 