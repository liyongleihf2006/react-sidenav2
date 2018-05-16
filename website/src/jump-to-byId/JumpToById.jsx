import React from "react";
import { jumpToById } from "react-sidenav2";
export default class JumpToById extends React.Component {
    render() {
        return (
            <div>
                <strong>
                    描述
                </strong>
                <pre>
                    <code>
                        通过路由数据的id进行路由跳转的方法
                    </code>
                </pre>
                <strong>
                    引入
                </strong>
                <pre>
                    <code>
                        {`import {jumpToById} from "react-sidenav2";`}
                    </code>
                </pre>
                <strong>
                    使用
                </strong>
                <pre>
                    <code>
                        {`jumpToById({ "routeId": "0","id":"0",params:{"desc":"带参跳转"} })`}
                    </code>
                </pre>
                <strong>
                    参数
                </strong>
                <pre>
                    <code>
                        routeId:string<a
                            href="javascript:;"
                            onClick={() => jumpToById({ "routeId": "10" })}
                        >Data</a>路由数据中定义的id属性
{`

`}
                        id:string 当使用相同的routeId的时候
                        ,为了打开多个相同routeId的页面(比如修改数据的时候)
                        ,因此传入该参数加以区分(一般使用要修改的数据的id)
{`

`}
                        params:any 使用 jumpToById 方法进入<a
                            href="javascript:;"
                            onClick={() => jumpToById({ "routeId": "32" })}
                        >路由页面</a>时传入的参数
                    </code>
                </pre>
            </div>
        )
    }
} 