module.exports = function collectSameElements(collectionA, collectionB) {
    let set1 = new Set(collectionA);
    const [arr] = collectionB;
    let set2 = new Set(arr);
    let intersectionSet = new Set([...set1].filter(x => set2.has(x)));
    return Array.from(intersectionSet);
};