import React from "react";
import { jumpToById } from "react-sidenav2";
export default class NoMatchPanel extends React.Component {
    render() {
        return (<div>
            <strong>
                描述
            </strong>
            <pre>
                <code>
                    没有路由匹配url的时候展示的面板
                </code>
            </pre>
            <strong>
                定义NoMatchPanel
            </strong>
            <pre>
                <code>
                    {`class NoMatchPanel extends React.Component {
    render() {
        const { pathname, history } = this.props;
        return <div>
            无法找到路径"{pathname}"!
            <button onClick={
                () => {
                    history.goBack();
                }
            }>退后</button>
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
    NoMatchPanel={NoMatchPanel}
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
                    <a
                        href="javascript:;"
                        onClick={() => jumpToById({ "routeId": "11" })}
                    >history</a>
                    //具体参见https://github.com/ReactTraining/history
{`

pathname:string 未匹配上的路由路径`}

                </code>
            </pre>
        </div>)
    }
} 