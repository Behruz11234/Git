// // 1
// function longestPalindromicSubstring(s) {
//   let res = "";

//   for (let i = 0; i < s.length; i++) {
  
//     let l = i, r = i;
//     while (l >= 0 && r < s.length && s[l] === s[r]) {
//       if (r - l + 1 > res.length) {
//         res = s.slice(l, r + 1);
//       }
//       l--;
//       r++;
//     }

  
//     l = i; r = i + 1;
//     while (l >= 0 && r < s.length && s[l] === s[r]) {
//       if (r - l + 1 > res.length) {
//         res = s.slice(l, r + 1);
//       }
//       l--;
//       r++;
//     }
//   }

//   return res;
// }

// console.log(longestPalindromicSubstring("babad")); 




// // 2
// function rotateArray(arr, k) {
//   return [...arr.slice(k), ...arr.slice(0, k)];
// }

// console.log(rotateArray([1, 2, 3, 4, 5], 2)); 




// // 3
// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twoSum([2, 7, 11, 15], 9)); 




// // 4
// function hasSum(arr, target) {
//   function dfs(i, sum) {
//     if (sum === target) return true;
//     if (i >= arr.length) return false;

//     return dfs(i + 1, sum + arr[i]) || dfs(i + 1, sum);
//   }

//   return dfs(0, 0);
// }

// console.log(hasSum([2, 4, 1], 7)); 
// console.log(hasSum([2, 4, 2], 7)); 



// // 5. Array farqi
// function arrayDiff(a, b) {
//   return [
//     ...a.filter(x => !b.includes(x)),
//     ...b.filter(x => !a.includes(x))
//   ];
// }

// console.log(arrayDiff([2, 4, 1], [2, 3, 8])); 


// 5-masala  

// function arrayDifference(arr1, arr2) {
//     let set1 = new Set(arr1);
//     let set2 = new Set(arr2);
//     let res = [];

//     for (let x of set1) {
//         if (!set2.has(x)) res.push(x);
//     }

//     for (let x of set2) {
//         if (!set1.has(x)) res.push(x);
//     }

//     return res;
// }

// console.log(arrayDifference([2, 4, 1], [2, 3, 8])); 


// 6-masala 

// function mostFrequentElement(arr) {
//     let map = {};
//     let max = 0;
//     let res = null;

//     for (let num of arr) {
//         map[num] = (map[num]  0) + 1;

//         if (map[num] > max) {
//             max = map[num];
//             res = num;
//         }
//     }

//     return res;
// }

// console.log(mostFrequentElement([1, 3, 1, 3, 2, 1])); 


// 7-masala 

// function incrementDigits(str) {
//     return str
//         .split("")
//         .map(a => (a >= '0' && a <= '9') ? Number(a) + 1 : a)
//         .join("");
// }

// console.log(incrementDigits("abc123")); 


// 8-masala 

// function longestIncreasingSubarray(arr) {
//     let maxArr = [];
//     let curr = [arr[0]];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[i - 1]) {
//             curr.push(arr[i]);
//         } else {
//             if (curr.length > maxArr.length) maxArr = curr;
//             curr = [arr[i]];
//         }
//     }

//     if (curr.length > maxArr.length) maxArr = curr;

//     return maxArr;
// }

// console.log(longestIncreasingSubarray([10, 20, 30, 10, 40, 50, 52, 55, 6]));


// 9-masala 

// function countOccurrences(arr) {
//     let map = {};

//     for (let num of arr) {
//         map[num] = (map[num]  0) + 1;
//     }

//     return map;
// }

// console.log(countOccurrences([1, 2, 2, 3, 4, 4, 4, 5]));


// 10-masala  

// function matrixSum(matrix) {
//     let sum = 0;

//     for (let row of matrix) {
//         for (let num of row) {
//             sum += num;
//         }
//     }

//     return sum;
// }
// console.log(matrixSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));