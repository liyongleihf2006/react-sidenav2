import getFlatData from "./getFlatData";
export default function isNoMatch(data, nestedProp, pathname) {
    let flatData = getFlatData(data, nestedProp);
    let patternName = pathname.replace(/\/[^/]+$/, "/:id");
    return !(flatData[pathname] || flatData[patternName]);
}