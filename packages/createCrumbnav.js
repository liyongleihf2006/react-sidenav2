import path from "path";
import React from "react";
import PropTypes from 'prop-types';
import { Router, Route } from "react-router-dom";
import isHistoryPathEqual from "./ishistorypathequal";
import pushPath from "./pushPath";
import { transitionManager } from "./createTransitionManager";
import { getOptions } from "./setup";
import isNoMatch from "./isNoMatch";
import getStorageData from "./getStorageData";
export default function createCrumbnav(){
    const {data, history, nestedProp} = getOptions();
    class Crumbnav extends React.Component {
        render() {
            const props = this.props;
            const { history } = props;
            return (
                <Router history={history}>
                    <CrumbnavItems {...props} />
                </Router>
            )
        }
    }
    class CrumbnavItems extends React.Component {
        unlisten;
        componentWillMount() {
            this.listener();
        }
        componentDidMount() {
            this.unlisten = transitionManager.appendListener(this.listener.bind(this));
        }
        componentWillUnmount() {
            this.unlisten();
        }
        render() {
            const props = this.props;
            const { history, Formatter, SegmentLine, className } = props;
            const { items } = this.state;
            if(sessionStorage.getItem("sidenav")&&!JSON.parse(sessionStorage.getItem("sidenav")).length){
                return null;
            }
            return items.map((item, idx) => {
                return (
                    <span className={className} key={item.to} onClick={this.handleClick.bind(this, item.to)}>
                        <Formatter item={item} />
                    </span>
                )
            })
        }
        handleClick(to) {
            const { history } = this.props;
            const { location } = history;
            if (!isHistoryPathEqual(to, location)) {
                history.push(to);
            } else {
                history.replace(to);
            }
        }
        listener() {
            const items = this.getItems();
            this.setState({ items: items });
        }
        getItems() {
            const { history, data, nestedProp } = this.props;
            const pathname = history.location.pathname;
            const patternPathname = pathname.replace(/\/[^/]+$/, "/:id");
            const items = [];
            _getItems(data);
            return items;
            function _getItems(data) {
                for (let item of data) {
                    if (item.to === pathname) {
                        items.unshift(item);
                        return true;
                    }
                    if (item.to === patternPathname) {
                        let obj = {};
                        for (let key in item) {
                            obj[key] = item[key];
                        }
                        obj.to = pathname;
                        items.unshift(obj);
                        return true;
                    }
                    if (item[nestedProp] && item[nestedProp].length) {
                        if (_getItems(item[nestedProp])) {
                            items.unshift(item);
                            return true;
                        }
                    }
                }
                return false;
            }
        }
    }
    Crumbnav.propTypes = {
        history: PropTypes.object.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.any.isRequired,
            path: PropTypes.string.isRequired
        })).isRequired,
        nestedProp: PropTypes.string,
        Formatter: PropTypes.func.isRequired,
        className: PropTypes.string
    }
    Crumbnav.defaultProps = {
        data: data,
        history: history,
        nestedProp: nestedProp
    };;
    return Crumbnav;
}