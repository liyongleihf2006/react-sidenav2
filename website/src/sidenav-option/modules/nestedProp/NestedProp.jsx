import React from "react";
export default class NestedProp extends React.Component {
    render() {
        return (<div>
            <strong>
                描述
            </strong>
            <pre>
                <code>
                    nestedProp:string 指定路由嵌套的键,一般用"children"
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
    nestedProp: "children",
    ...
});
`}
                </code>
            </pre>
        </div>)

    }
} 