module.exports = function createUpdatedCollection(collectionA, objectB) {
    let collectionC = Array.prototype.reduce.call(collectionA, function (pre, cur) {
        pre[cur] ? pre[cur]++ : pre[cur] = 1;
        return pre;
    }, {});

    let arr = [];
    for (let key of Object.keys(collectionC)) {
        arr.push( { key: key, count: collectionC[key] });
    }

    let setB = new Set(Array.from(objectB['value']));
    // let setC = new Set(Array.from(collectionC));
    // console.log(setB);
    arr.forEach(element => {
        for (let i of setB) {
            if (i == element['key']) {
                element['count'] -= Math.floor(element['count'] / 3);
            }
        }
    });


    return (arr);
}
