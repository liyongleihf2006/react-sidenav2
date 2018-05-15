import React from "react";
export default class JumpTo extends React.Component {
    render() {
        return (
            <div>
                <strong>
                    描述
                </strong>
                <pre>
                    <code>
                        页面跳转方法
                    </code>
                </pre>
                <strong>
                    引入
                </strong>
                <pre>
                    <code>
                        {`import {jumpTo} from "react-sidenav2";`}
                    </code>
                </pre>
                <strong>
                    使用
                </strong>
                <pre>
                    <code>
                        {`jumpTo({to:"/getting_started"}); //跳转到“开始使用”导航页`}
                    </code>
                </pre>
                <strong>
                    参数
                </strong>
                <pre>
                    <code>
                        to:string 跳转的目标路由路径
                    </code>
                </pre>
            </div>
        )
    }
} 