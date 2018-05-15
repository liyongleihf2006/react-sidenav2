import path from "path";
import React from "react";
import PropTypes from 'prop-types';
import { Router, Route } from "react-router-dom";
import pushPath from "./pushPath";
import {transitionManager} from "./createTransitionManager";
import {isCloseBack,setCloseBack} from "./util";
import {getOptions} from "./setup";
export default function createSidenav(){
    const {data, history, nestedProp} = getOptions();
    class Sidenav extends React.Component {
        listen;
        componentDidMount() {
            const { history } = this.props;
            this.initStorage();
            this.listen = history.listen((path, state) => {
                let sidenavStorage = sessionStorage.getItem("sidenav");
                if (!sidenavStorage) {
                    sidenavStorage = [];
                } else {
                    sidenavStorage = JSON.parse(sidenavStorage);
                }
                if (isCloseBack() && state === "POP") {
                    if (sidenavStorage.every((pathname) => {
                        return pathname !== path.pathname;
                    })) {
                        history.goBack();
                    } else {
                        setCloseBack(false);
                    }
                } else {
                    pushPath(sidenavStorage, path.pathname, data, nestedProp);
                }
                transitionManager.notifyListeners(state);
            })
        }
        initStorage() {
            const { history } = this.props;
            const { location } = history;
            const currentPathname = location.pathname;
            let sidenavStorage = sessionStorage.getItem("sidenav");
            if (!sidenavStorage) {
                sidenavStorage = [];
            } else {
                sidenavStorage = JSON.parse(sidenavStorage);
            }
            pushPath(sidenavStorage, currentPathname, data, nestedProp);
            transitionManager.notifyListeners();
        }
        componentWillUnmount() {
            this.listen();
        }
        render() {
            const props = this.props;
            const { history } = props;
            return (
                <Router history={history}>
                    <Navs {...props} />
                </Router>
            )
        }
    }
    class Navs extends React.Component {
        render() {
            const props = this.props;
            let { data, to, ulClassName } = props;
            return data.length && <ul className={ulClassName}>
                {data.map((item) => (
                    <Nav {...props} key={item.id} item={item} to={path.join(to || "", item.path)} />
                ))}
            </ul>
        }
    }
    class Nav extends React.Component {
        render() {
            const props = this.props;
            const { item, to, Formatter, nestedProp, liClassName } = props;
            if (item.sidenav === false) return null;
            return <Route
                path={to}
                children={({ ...args }) => {
                    const { match } = args;
                    return <li className={liClassName}>
                        <Formatter item={item} to={to} {...props}  {...args} />
                        {match && item[nestedProp]
                            && (item[nestedProp].length||null)
                            && <Navs {...props} data={item[nestedProp]} to={to} />}
                    </li>
                }}
            />
        }
    }
    Sidenav.propTypes = {
        history: PropTypes.object.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.any.isRequired,
            path: PropTypes.string.isRequired,
            sidenav:PropTypes.bool
        })).isRequired,
        nestedProp: PropTypes.string,
        Formatter: PropTypes.func.isRequired,
        ulClassName: PropTypes.string,
        liClassName: PropTypes.string
    }
    Sidenav.defaultProps = {
        data: data,
        history: history,
        nestedProp: nestedProp
    };
    return Sidenav;
}