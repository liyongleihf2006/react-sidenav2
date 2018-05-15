import invariant from "invariant";
import isHistoryPathEqual from "./ishistorypathequal";
import {getOptions} from "./setup";
export default function jumpTo({ to }){
    const {data, history, nestedProp} = getOptions();
    invariant(to, "the params of 'to' is required");
    const { location } = history;
    if (!isHistoryPathEqual(to, location)) {
        history.push(to);
    } else {
        history.replace(to);
    }
}