module.exports = function countSameElements(collection) {
    let a,str;
    let obj = Array.prototype.reduce.call(collection, function (pre, cur) {
        if (cur.includes('-')) {
            a = Number.parseInt(cur.slice(2));
            str = cur.slice(0, 1);
            pre[str] ? pre[str] += a : pre[str] = a;

        } else if (cur.includes('[')) {
            a = Number.parseInt(cur.slice(2, cur.length - 1));
            str = cur.slice(0, 1);
            pre[str] += a;

        } else if (cur.includes(':')) {
            a = Number.parseInt(cur.slice(2, cur.length));
            str = cur.slice(0, 1);
            pre[str] ? pre[str] += a : pre[str] = a;

        } else if (pre[cur]) {
            pre[cur]++;

        } else {
            pre[cur] = 1;
        }
        return pre;
    }, {});

    let arr = [];
    for (let key of Object.keys(obj)) {
        arr.push({ name: key, summary: obj[key] });
    }
    return (arr);

}
