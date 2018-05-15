import path from "path";
export default function getFlatDataById(data, nestedProp) {
    let flatData = {};
    _getFlatDataById(data, "");
    return flatData;
    function _getFlatDataById(data, parentTo) {
        if (data && data.length) {
            data.forEach(item => {
                const to = path.join(parentTo, item.path);
                item.to = to;
                flatData[item.id] = item;
                if (item[nestedProp] && item[nestedProp].length) {
                    _getFlatDataById(item[nestedProp], to)
                }
            })
        }
    }
}