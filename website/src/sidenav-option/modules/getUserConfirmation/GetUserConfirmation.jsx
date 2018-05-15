import React from "react";
export default class GetUserConfirmation extends React.Component {
    render() {
        return (<div>
            <strong>
                描述
            </strong>
            <pre>
                <code>
                    当要关闭某一个页面时,某些情况下需要询问是否确定关闭该页面时使用,
                    配合每个模块中注入的"setPrompt"使用
                </code>
            </pre>
            <strong>
                使用示例
            </strong>
            <div>
                <span>当下面的文本框中有内容的时候会询问是否确认关闭该页面</span><br/>
                <input onInput={(evt)=>{
                    const {setPrompt} = this.props;
                    let val = evt.target.value.trim();
                    val?setPrompt("确定关闭该页面吗?"):setPrompt();
                }}/>
            </div>
            <strong>
                示例代码
            </strong>
            <pre>
                <code>
{`
<input onInput={(evt)=>{
    const {setPrompt} = this.props;
    let val = evt.target.value.trim();
    val?setPrompt("确定关闭该页面吗?"):setPrompt();
}}/>
`}
                </code>
            </pre>
            <strong>
                定义getUserConfirmation
            </strong>
            <pre>
                <code>
{`
const getUserConfirmation = function (prompt, resolve, reject) {
    if (prompt) {
        const result = window.confirm(prompt);
        result ? resolve() : reject();
    } else {
        resolve();
    }
};
`}
                </code>
            </pre>
            <strong>
                将getUserConfirmation传入配置中
            </strong>
            <pre>
                <code>
{`
setup({
    ...
    getUserConfirmation: getUserConfirmation,
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
{`prompt:any 每个模块中调用setPrompt时传入的参数

resolve:func 调用该函数表示同意关闭面板

reject:func 调用该函数表示取消关闭面板`}
                </code>
            </pre>
        </div>)

    }
} 