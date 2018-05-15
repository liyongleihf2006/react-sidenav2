import React from "react";
export default class PanelClassName extends React.Component {
    render() {
        return (<div>
            <strong>
                描述
            </strong>
            <pre>
                <code>
                panelClassName:string tab面板的className
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
    panelClassName: "panel",
    ...
});
`}
                </code>
            </pre>
        </div>)

    }
} 