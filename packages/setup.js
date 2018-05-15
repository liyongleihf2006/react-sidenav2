import path from "path";
import React from "react";
import invariant from "invariant";
import Loadable from 'react-loadable';
import createPromptManager from "./createPromptManager";
let options;
export const setup = ({ data, history, nestedProp,panelClassName, getUserConfirmation, Loading,topnavActiveClassName="topnav-item-active"}) =>{
    invariant(data, "the params of 'data' is required");
    invariant(history, "the params of 'history' is required");
    invariant(nestedProp, "the params of 'nestedProp' is required");
    invariant(getUserConfirmation, "the params of 'getUserConfirmation' is required");
    invariant(Loading, "the params of 'Loading' is required");
    options = {};
    options.data = data;
    options.history = history;
    options.nestedProp = nestedProp;
    options.panelClassName = panelClassName;
    options.getUserConfirmation = getUserConfirmation;
    options.Loading = Loading;
    options.topnavActiveClassName = topnavActiveClassName;
    initData(options.data, options.nestedProp, options.getUserConfirmation, options.Loading);
}
export const getOptions=()=>{
    invariant(options, "You should first call the method of \"setup\" to initialize");
    return options;
}
function initData(data, nestedProp, getUserConfirmation, Loading) {
    _initData(data, "");
    function _initData(items, parentTo) {
        items.forEach(item => {
            const { setPrompt, confirm } = createPromptManager(getUserConfirmation);
            item.to = path.join(parentTo, item.path);
            item.confirm = confirm;
            item.component = Loadable({
                loader: item.loader,
                render(loaded, props) {
                    let Component = loaded.default;
                    return <Component {...props} setPrompt={setPrompt} />;
                },
                loading(props) { return <Loading {...props} navData={item} /> }
            })
            if (item[nestedProp] && item[nestedProp]) {
                _initData(item[nestedProp], item.to)
            }
        })
    }
}