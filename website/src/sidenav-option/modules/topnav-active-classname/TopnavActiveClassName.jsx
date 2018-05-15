import React from "react";
export default class TopnavActiveClassName extends React.Component {
    render() {
        return (<div>
            <strong>
                描述
            </strong>
            <pre>
                <code>
                topnavActiveClassName:string = "topnav-item-active" //顶部路由元素被激活时候的className
                </code>
            </pre>
            <strong>
                使用
            </strong>
            <pre>
                <code>
{`
setup({
    ...
    topnavActiveClassName: "topnav-item-active",
    ...
});
`}
                </code>
            </pre>
        </div>)

    }
} 