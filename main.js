const arr = [{x: 10}, {x: 20}, {x: 12}, {x: 7}];

const res = arr.reduce((acc, e) => {
    return acc + e.x
}, 0)

console.log(res)


const arr2 = [1, 2, 3, 4, 5];

const transformedArr = arr2.map(num => 'x'.repeat(num));

console.log(transformedArr);