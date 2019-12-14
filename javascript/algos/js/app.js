// bubble sort algorithms \\

var nums = [10,5,3,8,2,6,4,7,9,1];


// do {    
//     var swapped = false;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i + 1] < nums[i]) {
//             let temp = nums[i];
//             nums[i] = nums[i + 1];
//             nums[i + 1] = temp;
//             swapped = true; 
//         }
//     }
// } while (swapped);



// console.log(nums);


// insertion sort algorithms

// function insertSort(nums) {
//     for (let i = 1; i < nums.length; i++) { // starts at the one index and loops thru the array
//         for (let j = 0; j < nums.length; j++) {
//            if (nums[i] < nums[j]){
//                const spliced = nums.splice(i, 1);
//                nums.splice(j, 0, spliced[0])
//            }
//         }
//     }
//     console.log(nums);
// }

// insertSort(nums);



// MergeSort O n log(n)

function mergeSort(nums) {
    if (nums.length < 2) {
        return nums;
    }

    let length = nums.length;
    let middle = Math.floor(length / 2);
    var left = nums.slice(0,middle);
    var right = nums.slice(middle, length);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return stitch(sortedLeft, sortedRight);

}

function stitch (left,right) {
    var results = [];

    while(left != 0 && right != 0){
        if (left[0] <= right[0] ){
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    while(left.length){
        results.push(left.shift());
    }

    while(right.length){
        results.push(right.shift());
    }

    return results;

  
    
}
    
let mergeSortResults = mergeSort(nums);
console.log(mergeSortResults); 








// QuickSort O nlog(n)

// function quickSort(nums){
//     if (nums.length <= 1) {
//         return nums;
//     }
//     let pivot = nums.pop();
//     let left = [];
//     let right = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < pivot){
//             left.push(nums[i]);
//         } else {
//             right.push(nums[i]);
//         }
//     }

//     let sortedLeft = quickSort(left);
//     let sortedRight = quickSort(right);

//     return [].concat(sortedLeft, pivot, sortedRight);
// }

// let quickSortResults = quickSort(nums);
// console.log(quickSortResults);
