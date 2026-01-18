const contains = function(object, search) {
    for (const thingy in object) {
        // console.log(object[thingy])
        // console.log(search)
        if (object[thingy] === search) {
                return true
            } 
        if (typeof object[thingy] === "object") {
            if (contains(object[thingy], search)) {
                return true
            }
            contains(object[thingy], search)
        }
    }
    return false
};
  

const meaningOfLifeArray = [42]
const object = {
    data: {
      duplicate: "e",
      stuff: {
        thing: {
          banana: NaN,
          moreStuff: {
            something: "foo",
            answer: meaningOfLifeArray,
          },
        },
      },
      info: {
        duplicate: "e",
        magicNumber: 44,
        empty: null,
      },
    },
  }

console.log(contains(object, NaN))
// Do not edit below this line
module.exports = contains;
