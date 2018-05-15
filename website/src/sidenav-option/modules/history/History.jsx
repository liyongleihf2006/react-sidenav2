import React from "react";
export default class History extends React.Component {
    render() {
        return (<div>
            <strong>
                安装history
            </strong>
            <pre>
                <code>
                    {`npm install --save history`}
                </code>
            </pre>
            <strong>
                获取history
            </strong>
            <pre>
                <code>
{`import {createHashHistory,createBrowserHistory} from "history";
const history = createHashHistory();
//具体参见https://github.com/ReactTraining/history
`}
                </code>
            </pre>
            <strong>
                将history传入配置中
            </strong>
            <pre>
                <code>
{`
setup({
    ...
    history: history,
    ...
});
`}
                </code>
            </pre>
        </div>)

    }
} 