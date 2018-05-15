import React from "react";
import { jumpToById } from "../../../dist/index";
export default class Crumbnav extends React.Component {
    render() {
        return (
            <div>
                <strong>
                    描述
                </strong>
                <pre>
                    <code>
                        面包屑导航
                    </code>
                </pre>
                <strong>
                    引入构造函数
                </strong>
                <pre>
                    <code>
                        {`import {createCrumbnav} from "react-sidenav2";`}
                    </code>
                </pre>
                <strong>
                    生成Crumbnav
                </strong>
                <pre>
                    <code>
                        const Crumbnav = createCrumbnav();
                    </code>
                </pre>
                <strong>
                    挂载Crumbnav
                </strong>
                <pre>
                    <code>
                        {`
render(<Crumbnav
    className={"crumbnav-item"}
    Formatter={CrumbnavFormatter}
/>, document.querySelector("#crumbnav"));
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
                            onClick={() => jumpToById({ "routeId": "50" })}
                        >Formatter</a>:React.Component 每一个面包屑元素的格式
{`

className:string 面包屑元素的className
`}

                    </code>
                </pre>
            </div>
        )
    }
} 