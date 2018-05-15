import { createLocation, createPath } from "history";
/**
 * 判断传入的两个路径是否相同
 * @param {string|object} path1 
 * @param {string|object} path2 
 * @return {boolean} 
 */
export default function isHistoryPathEqual(path1, path2) {
    return getHref(path1) === getHref(path2);
    function getHref(to) {
        const location =
            typeof to === "string"
                ? createLocation(to, null, null, history.location)
                : to;
        return createPath(location);
    }
}