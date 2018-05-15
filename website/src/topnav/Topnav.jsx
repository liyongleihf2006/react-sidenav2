import React from "react";
import { jumpToById } from "../../../dist/index";
export default class TopPanel extends React.Component {
    render() {
        return (
            <div>
                <strong>
                    描述
                </strong>
                <pre>
                    <code>
                        顶部路由
                    </code>
                </pre>
                <strong>
                    引入构造函数
                </strong>
                <pre>
                    <code>
                        {`import {createTopnav} from "react-sidenav2";`}
                    </code>
                </pre>
                <strong>
                    生成TopPanel
                </strong>
                <pre>
                    <code>
                        const TopPanel = createTopnav();
                    </code>
                </pre>
                <strong>
                    挂载TopPanel
                </strong>
                <pre>
                    <code>
                        {`
render(<Topnav
    Formatter={TopnavFormatter}
    CloseBtnFormatter={CloseBtnFormatter}
    className={"topnav-item"}
    closeBtnClassName={"topnav-close"}
/>, document.querySelector("#topnav"));
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
                            onClick={() => jumpToById({ "routeId": "40" })}
                        >Formatter</a>:React.Component 每一个路由元素的格式
{`

`}
                        <a
                            href="javascript:;"
                            onClick={() => jumpToById({ "routeId": "41" })}
                        >CloseBtnFormatter</a>:React.Component 关闭按钮的格式
{`

className:string 路由元素的className

closeBtnClassName:string 关闭按钮的className
`}

                    </code>
                </pre>
            </div>
        )
    }
} 