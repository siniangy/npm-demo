// 判断是否是数组

module.exports = function tinyy(arr) {
    return Array.isArray(arr) || Object.prototype.toString.call(arr) === "[object Array]";
}