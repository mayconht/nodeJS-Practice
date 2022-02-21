const { getPeople } = require('./service');

//how it works on background
Array.prototype.myFilter = function (callback) {
    const list = [];
    for (index in this) {
        const item = this[index];
        const result = callback(item, index, this);
        //0, "", null, undefined === false
        if (!result) continue;
        list.push(item);
    }
    return list;
}



async function main() {

    try {
        const { results } = await getPeople('a');
        // const larsFamily = results.filter((item) => {
        //     // it returns a boolean by default to remove or keep on list.
        //     // Not found = -1
        //     // found == array position
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1
        //     return result
        // });

        const larsFamily = results.myFilter((item, index, list) => {
            console.log(`Index: ${index}`, list.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        });

        const names = larsFamily.map((pessoa) => pessoa.name);
        console.log(names);
    } catch (error) {
        console.log("Falha: ", error)
    }
}


main();