const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);
const zehray = getSizedArray(50000);


// How long does it take to double every number in a given 
// array? 
//Results for the extraLargeArray
//insert 1.3508889 s
//append 4.8774 ms

// Results for the largeArray
// insert 11.4735 ms
// append 593.8 μs

// Results for the mediumArray
// insert 208.3 μs
// append 159.2 μs

// Results for the smallArray
// insert 54.1 μs
// append 114.5 μs

// Results for the tinyArray
// insert 39 μs
// append 98.3 μs

// Results for the zehray
// insert 291.6037 ms
// append 3.1252 ms




// Try it with first function
perf.start();                     // Starts timer
doublerAppend(zehray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(zehray);
let resultsInsert = perf.stop();


console.log('Results for the zehray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


//Behavior:so the unshift function seems to be linear with a rate of 0.049 nanoseconds per step
//.push seems to be a parabolic function that surpasses unshift in time at arounf 7708 nanoseconds or 547 steps.
//I plotted the data on a graph in desmos and they gave linear graphs but this is a regression, I added another measure, 50000 for a referene and I was correct, push seems to be parabolic in nature. for very small functions, .push is faster but after 7708 nanoseconds, .push skyrockets in terms of speed. 


//EC: I believe .push is so much slower is that it must iterate through the entire array. So the longer the array gets, the longer it takes. If I wanted to push 100 elements, that would be 1+2+3+.....+99. I think .unshift is so much faster is because it adds to the front, if I needed to add 100 elements, It would go 1 + 1+ 1+1+1....+1+1. What I know about arrays is that the name points to the first element and the first element points to the second. If you push, you need to follow this breadcrumb trail to get to the end location. Whereas unshift, it points to the first element, makes the array point to the new element and deletes the arrays breadcrumb to the origial first element
