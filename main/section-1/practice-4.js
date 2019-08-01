module.exports = function collectSameElements(collectionA, collectionB) {
    let arr = collectionA.map(item => item.key);
    let set1 = new Set(Array.from(arr));
    let set2 = new Set(Array.from(collectionB['value']));
    let intersectionSet = new Set([...set1].filter(x => set2.has(x)));
    return (Array.from(intersectionSet));
};