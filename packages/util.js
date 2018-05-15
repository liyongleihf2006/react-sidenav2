let _isCloseBack = false;//是否是因为关闭标签导致的历史回退
export function setCloseBack(isCloseBack){
    _isCloseBack = isCloseBack;
}
export function isCloseBack(){
    return _isCloseBack;
}