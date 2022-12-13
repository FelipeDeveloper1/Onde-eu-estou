const array = [1, 1, 1, 2, 3, 3, 4, 4, 4, 4, 5, 5]
let nr = []

const getrepeat = (array, value) => array.reduce((acc, item) => {
    console.log(value == item)
    console.log(acc)
    return acc



}, 0)
getrepeat(array, 1)