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
