module.exports = function collectSameElements(collection) {
    let a,str;
    let obj = Array.prototype.reduce.call(collection, function (pre, cur) {
        if (cur.includes('-')) {
            a = Number.parseInt(cur.slice(2));
            str = cur.slice(0, 1);
            // console.log(pre);
            pre[str] ? pre[str] += a : pre[str] = a;
            // console.log(str);
        } else if (pre[cur]) {
            pre[cur]++;
            // console.log(pre[cur] + "++");
        } else {
            pre[cur] = 1;
        }
        return pre;
    }, {});

    let arr = [];
    for (let key of Object.keys(obj)) {
        arr.push( { key: key, count: obj[key] });
    }
    return (arr);
}
