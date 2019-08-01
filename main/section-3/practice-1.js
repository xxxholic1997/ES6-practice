module.exports = function createUpdatedCollection(collection, object) {
    let set1 = new Set(Array.from(object['value']))
    collection.forEach(element => {
        for (let i of set1) {
            if (element['key'] == i) {
                // console.log(element['key'] + " " + element['count']);
                element['count']--;
            }
        }
    });
    return (collection);
}
