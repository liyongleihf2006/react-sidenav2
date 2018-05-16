import React from "react";
import { jumpToById } from "react-sidenav2";
export default class Sidenav extends React.Component {
    render() {
        return (
            <div>
                <strong>
                    引入构造函数
                </strong>
                <pre>
                    <code>
                        {`import {createSidenav} from "react-sidenav2";`}
                    </code>
                </pre>
                <strong>
                    生成Sidenav
                </strong>
                <pre>
                    <code>
                        const Sidenav = createSidenav();
                    </code>
                </pre>
                <strong>
                    挂载Sidenav
                </strong>
                <pre>
                    <code>
                        {`
render(<Sidenav
    Formatter={SidenavFormatter}
    ulClassName={"sidenav-ul"}
    liClassName={"sidenav-li"}
/>, document.querySelector("#sidenav"));
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
                            onClick={()=>jumpToById({"routeId":"20"})}
                        >Formatter</a>:React.Component 每一个路由元素的格式
{`

ulClassName:string 侧边导航子路由集合容器的className

liClassName:string 侧边栏导航子路由元素的className`}
                        
                    </code>
                </pre>
            </div>
        )
    }
} 