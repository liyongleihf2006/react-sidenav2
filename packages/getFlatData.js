import path from "path";
export default function getFlatData(data, nestedProp) {
    let flatData = {};
    _getFlatData(data, "");
    return flatData;
    function _getFlatData(data, parentTo) {
        if (data && data.length) {
            data.forEach(item => {
                const to = path.join(parentTo, item.path);
                flatData[to] = item;
                if (item[nestedProp] && item[nestedProp].length) {
                    _getFlatData(item[nestedProp], to)
                }
            })
        }
    }
}