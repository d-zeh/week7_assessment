//sumzero

function addtoZero(array) {
    if ((array.length == 1) || array.length == 0) {
        console.log("false")
        break
    }
    let (i = 0, i <array.length -1, i++) {
        let (j = i+1, j <array.length, j++) {
            if (array[i] + array[j] == 0) {
                console.log("false")
                break
            }
        }
    }
}

addtoZero([2,3,4])