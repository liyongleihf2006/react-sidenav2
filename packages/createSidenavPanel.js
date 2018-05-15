import path from "path";
import React from "react";
import PropTypes from 'prop-types';
import { Router, Route } from "react-router-dom";
import pushPath from "./pushPath";
import { transitionManager } from "./createTransitionManager";
import { getOptions } from "./setup";
import isNoMatch from "./isNoMatch";
import getStorageData from "./getStorageData";
export default function createSidenavPanel() {
    const { data, history, nestedProp, panelClassName } = getOptions();
    class SidenavPanel extends React.Component {
        render() {
            const props = this.props;
            const { history } = props;
            return <Router history={history}>
                <SidenavPanelItems {...props} />
            </Router>
        }

    }
    class SidenavPanelItems extends React.Component {
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
            const { history, data, nestedProp, Formatter, EmptyPanel, NoMatchPanel } = props;
            const { pathnames } = this.state;

            if (isNoMatch(data, nestedProp, history.location.pathname)) {
                return <NoMatchPanel {...props} history={history} location={history.location} pathname={history.location.pathname} />
            }
            let items = getStorageData.call(this, pathnames);
            const Panels = items.map(item => {
                const { data, pathname } = item;
                const isActive = history.location.pathname === pathname;
                const Component = data.component;
                let panelParams = sessionStorage.getItem("sidenav-panelParams");
                if (!panelParams) {
                    panelParams = {};
                } else {
                    panelParams = JSON.parse(panelParams);
                }
                const params = panelParams[pathname];
                let style = {};
                if (!isActive) {
                    style.display = "none";
                }
                return (data ? <div key={pathname} style={style} className={panelClassName}>
                    <Component {...props} history={history} navData={data} params={params} />
                </div> : null)
            });
            return Panels.length ? Panels : (EmptyPanel ? <EmptyPanel /> : null)
        }
        listener(state) {
            let pathnames = sessionStorage.getItem("sidenav");
            this.setState({ pathnames: pathnames });
        }
    }
    SidenavPanel.propTypes = {
        history: PropTypes.object.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.any.isRequired,
            path: PropTypes.string.isRequired
        })).isRequired,
        nestedProp: PropTypes.string,
        EmptyPanel: PropTypes.func,
        NoMatchPanel: PropTypes.func.isRequired,
        className: PropTypes.string
    }
    SidenavPanel.defaultProps = {
        data: data,
        history: history,
        nestedProp: nestedProp
    };
    return SidenavPanel;
}