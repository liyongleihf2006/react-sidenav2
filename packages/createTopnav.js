import path from "path";
import React from "react";
import PropTypes from 'prop-types';
import { Router, Route } from "react-router-dom";
import pushPath from "./pushPath";
import { transitionManager } from "./createTransitionManager";
import { getOptions } from "./setup";
import isNoMatch from "./isNoMatch";
import getStorageData from "./getStorageData";
import classnames from 'classnames';
import {setCloseBack} from "./util";
export default function createTopnav(){
    const {data, history, nestedProp,topnavActiveClassName} = getOptions();
    class Topnav extends React.Component {
        render() {
            const props = this.props;
            const { history } = props;
            return (
                <Router history={history}>
                    <TopnavItems {...props} />
                </Router>
            )
        }
    }
    class TopnavItems extends React.Component {
        unlisten;
        componentWillMount() {
            this.listener();
        }
        componentDidMount() {
            this.unlisten = transitionManager.appendListener(this.listener.bind(this));
            this.activeItem && this.activeItem.scrollIntoView(true);
        }
        componentWillUnmount() {
            this.unlisten();
        }
        render() {
            const props = this.props;
            const { history, Formatter, CloseBtnFormatter, className, closeBtnClassName } = props;
            const { pathnames } = this.state;
            return getStorageData.call(this, pathnames).map(item => {
                const isActive = history.location.pathname === item.pathname;
                const { data, pathname } = item;
                const classname = classnames(className, {
                    [topnavActiveClassName]: isActive
                })
                return (
                    <span key={pathname} className={classname} ref={el => { if (isActive) this.activeItem = el }}>
                        <Formatter {...props} item={data} to={pathname} location={history.location} isActive={isActive} />
                        <span className={closeBtnClassName} onClick={this.handleClose.bind(this, pathname, data)}>
                            <CloseBtnFormatter {...props} item={data} to={pathname} location={history.location} isActive={isActive} />
                        </span>
                    </span>)
            })
        }
        componentDidUpdate() {
            this.activeItem && this.activeItem.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }
        listener() {
            let pathnames = sessionStorage.getItem("sidenav");
            this.setState({ pathnames: pathnames });
        }
        handleClose(pathname, data) {
            const props = this.props;
            const { history } = props;
            const { confirm } = data;
            confirm().then(() => {
                let { pathnames } = this.state;
                pathnames = JSON.parse(pathnames);
                pathnames.splice(pathnames.indexOf(pathname), 1);
                sessionStorage.setItem("sidenav", JSON.stringify(pathnames));
                transitionManager.notifyListeners();
                if (pathname === history.location.pathname && pathnames.length) {
                    setCloseBack(true);
                    history.goBack();
                }
            }).catch((event) => {
                console.info("cancel the operate of close nav");
            });
        }
    }
    Topnav.propTypes = {
        history: PropTypes.object.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.any.isRequired,
            path: PropTypes.string.isRequired
        })).isRequired,
        nestedProp: PropTypes.string,
        Formatter: PropTypes.func.isRequired,
        CloseBtnFormatter: PropTypes.func.isRequired,
        className: PropTypes.string,
        closeBtnClassName: PropTypes.string
    }
    Topnav.defaultProps = {
        data: data,
        history: history,
        nestedProp: nestedProp
    };;
    return Topnav;
}