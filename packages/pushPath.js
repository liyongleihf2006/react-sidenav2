import getFlatData from "./getFlatData";
export default function pushPath(sidenavStorage, pathname, data, nestedProp) {
    if (sidenavStorage.every((pathname2) => {
        return pathname2 !== pathname;
    })) {
        const patternPathname = pathname.replace(/\/[^/]+$/, "/:id");
        if (getFlatData(data, nestedProp)[pathname] || getFlatData(data, nestedProp)[patternPathname]) {
            sidenavStorage.push(pathname);
            sessionStorage.setItem("sidenav", JSON.stringify(sidenavStorage));
        }
    }
}