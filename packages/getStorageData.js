import getFlatData from "./getFlatData";
export default function getStorageData(pathnames) {
    const { data, nestedProp } = this.props;
    const flatData = getFlatData(data, nestedProp);
    if (!pathnames) {
        return [];
    } else {
        pathnames = JSON.parse(pathnames);
    }
    return pathnames.map(pathname => {
        let patternName = pathname;
        if (!flatData[patternName]) {
            patternName = pathname.replace(/\/[^/]+$/, "/:id");
        }
        return { data: flatData[patternName], pathname: pathname };
    }).filter(item=>{
        return item.data;
    })
}