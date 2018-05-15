import React from "react";
import { jumpToById } from "../../../../../dist/index";
export default class Loading extends React.Component {
    render() {
        return (<div>
            <strong>
                描述
            </strong>
            <pre>
                <code>
                    tab页加载时的过渡loading面板
                </code>
            </pre>
            <strong>
                生成Loading
            </strong>
            <pre>
                <code>
                    {`
const Loading=({navData})=>{
    return (
        <div>
            {navData.name}页加载中...
        </div>
    )
};
`}
                </code>
            </pre>
            <strong>
                将Loading传入配置中
            </strong>
            <pre>
                <code>
                    {`
setup({
    ...
    Loading: Loading,
    ...
});
`}
                </code>
            </pre>
            <strong>
                参数
            </strong>
            <pre>
                <code>
                    navData:any 在
                    <a
                        href="javascript:;"
                        onClick={()=>jumpToById({"routeId":"10"})}
                    >Data</a>定义的对应的导航数据
                </code>
            </pre>
        </div>)

    }
} 