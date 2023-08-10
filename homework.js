//sumzero

function addtoZero(array) {
    if ((array.length == 1) || array.length == 0) {
        console.log("false")
        return
    }
    for (let i = 0; i <array.length -1; i++) {
        for (let j = i+1; j <array.length; j++) {
            if (array[i] + array[j] == 0) {
                console.log("true")
                return
            }
        }
    }
    console.log("false")
    return

}
addtoZero([2,3,4]);
addtoZero([]);
addtoZero([1]);
addtoZero([1, 2, 3]);
addtoZero([1, 2, 3, -2]);

//Unique Characters
function hasUniqueChars(word) {
    for (let i = 0; i < word.length-1; i++) {
        for (let j = i+1; j < word.length; j++) {
                if (word[i] === word[j]) {
                    console.log("false")
                    return false
                }
        }
    }
    console.log(console.log("true"))
    return true
}
hasUniqueChars("Monday");
hasUniqueChars("Moonday")


//Pangram

function isPangram(input) {
    let sentence = input.toLowerCase();
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < letters.length; i++) {
        if(sentence.indexOf(letters[i]) < 0) {
            console.log("false");
            return false;
        }
    }
    console.log("true")
    return true
}
isPangram("The quick brown fox jumps over the lazy dog!");
isPangram("I like cats, but not mice");