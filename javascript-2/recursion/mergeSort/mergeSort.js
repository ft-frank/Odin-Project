const mergeSort = function (array) {

    if (length <= 1) {
        return
    }

    // I have to merge two given arrays each time recursively, but the merge won't operate until the function returns when length<=1. As it doesn't return it keeps calling until split down to 1.
    const merge = function (item1, item2){
        if (item1 > item2){
            return [item2, item1]
        }
        else {
            return [item1, item2]
        }
    }


    const split = function(array) {

        const length = array.length
        const mid = length/2
        const end = length

        if (length % 2 == 0) {
        const item1 = [...array.slice(0, (mid) )]
        const item2 = [...array.slice(mid, end)]
        return [item1, item2]
        }

        else {
            const item1 = [...array.slice(0, ((end-1)/2))]
            const item2 = [...array.slice((end-1)/2, end ) ]
            return [item1, item2]
            
        }

    }

    const left = split(array)[0]
    const right = split(array)[1]
    //keeps splitting and splitting until mergeSort returns a single element, as to which there is a left element and a right element.
    //will do so in a tree-like graph structure, as each array splits into an array that is dealth with separately.
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    
    
    
}

const array = [2,5,6,1,3,5]

mergeSort(array)