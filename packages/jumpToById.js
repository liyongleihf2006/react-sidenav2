import invariant from "invariant";
import getFlatDataById from "./getFlatDataById";
import isHistoryPathEqual from "./ishistorypathequal";
import {getOptions} from "./setup";
export default function jumpToById({ routeId, id, params }){
    const {data, history, nestedProp} = getOptions();
    invariant(routeId, "the params of 'routeId' is required");
    const { location } = history;
    const flatData = getFlatDataById(data, nestedProp);
    let to = flatData[routeId].to;
    if (id) {
        to = to.replace(":id", id);
    }
    let panelParams = sessionStorage.getItem("sidenav-panelParams");
    if(!panelParams){
        panelParams = {};
    }else{
        panelParams = JSON.parse(panelParams);
    }
    panelParams[to] = params;
    sessionStorage.setItem("sidenav-panelParams",JSON.stringify(panelParams));
    if (!isHistoryPathEqual(to, location)) {
        history.push(to);
    } else {
        history.replace(to);
    }
}