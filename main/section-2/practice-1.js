module.exports = function collectSameElements(collection) {
    let obj = Array.prototype.reduce.call(collection, function (pre, cur) {
        pre[cur] ? pre[cur]++ : pre[cur] = 1;
        return pre;
    }, {});

    let arr = [];
    for (let key of Object.keys(obj)) {
        arr.push({ key: key, count: obj[key] });
    }
    return (arr);
}
