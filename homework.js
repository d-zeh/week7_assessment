//sumzero

function addtoZero(array) {
    if ((array.length == 1) || array.length == 0) {
        console.log("false")
        return
    }
    for (let i = 0; i <array.length -1; i++) {
        for (let j = i+1; j <array.length; j++) {
            if (array[i] + array[j] == 0) {
                console.log("false")
                return
            }
        }
    }
}

addtoZero([2,3,4])