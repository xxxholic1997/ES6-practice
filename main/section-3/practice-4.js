module.exports = function createUpdatedCollection(collectionA, objectB) {
    let a,str;
    let collectionC = Array.prototype.reduce.call(collectionA, function (pre, cur) {
        if (cur.includes('-')) {
            a = 0;
            a = Number.parseInt(cur.slice(2));
            str = cur.slice(0, 1);

            pre[str] ? pre[str] += a : pre[str] = a;
            // console.log("a1 =  " + a);
        } else if (cur.includes('[')) {
            a = Number.parseInt(cur.slice(2, cur.length - 1));
            str = cur.slice(0, 1);
            pre[str] ? pre[str] += a : pre[str] = a;
            // console.log("a2 =  " + a);
        } else if (cur.includes(':')) {
            a = Number.parseInt(cur.slice(2, cur.length));
            str = cur.slice(0, 1);
            pre[str] ? pre[str] += a : pre[str] = a;

        } else if (pre[cur]) {
            pre[cur]++;
            // console.log(pre[cur] + "++");
        } else {
            pre[cur] = 1;
        }
 
        return pre;
    }, {});


    let arr = [];
    for (let key of Object.keys(collectionC)) {
        arr.push({ key: key, count: collectionC[key] });
    }

    let setB = new Set(Array.from(objectB['value']));

    arr.forEach(element => {
        for (let i of setB) {
  
            if (i == element['key']) {
                element['count'] -= Math.floor(element['count'] / 3);
            }
        }
    });

    return (arr);
}
