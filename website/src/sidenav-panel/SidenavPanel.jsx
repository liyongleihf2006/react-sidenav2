import React from "react";
import { jumpToById } from "react-sidenav2";
export default class SidenavPanel extends React.Component {
    render() {
        return (
            <div>
                <strong>
                    描述
                </strong>
                <pre>
                    <code>
                        路由面板模块
                    </code>
                </pre>
                <strong>
                    引入构造函数
                </strong>
                <pre>
                    <code>
                        {`import {createSidenavPanel} from "react-sidenav2";`}
                    </code>
                </pre>
                <strong>
                    生成SidenavPanel
                </strong>
                <pre>
                    <code>
                        const SidenavPanel = createSidenavPanel();
                    </code>
                </pre>
                <strong>
                    挂载SidenavPanel
                </strong>
                <pre>
                    <code>
                        {`
render(<SidenavPanel
    EmptyPanel={EmptyPanel}
    NoMatchPanel={NoMatchPanel}
/>, document.querySelector("#main"));
`}
                    </code>
                </pre>
                <strong>
                    属性
                </strong>
                <pre>
                    <code>
                        <a
                            href="javascript:;"
                            onClick={() => jumpToById({ "routeId": "30" })}
                        >EmptyPanel</a>:React.Component 没有任何路由面板被使用时展示的面板
{`

`}
                        <a
                            href="javascript:;"
                            onClick={() => jumpToById({ "routeId": "31" })}
                        >NoMatchPanel</a>:React.Component 没有路由匹配url的时候展示的面板
                    </code>
                </pre>
                <strong>
                    路由面板
                </strong>
                <pre>
                    <code>
                        <a
                            href="javascript:;"
                            onClick={() => jumpToById({ "routeId": "32" })}
                        >Panel</a>:React.Component 每一个路由匹配的面板
                    </code>
                </pre>
            </div>
        )
    }
} 