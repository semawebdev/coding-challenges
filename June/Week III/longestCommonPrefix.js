/* 14. Longest Common Prefix
Easy
14.3K
4K
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. */
var longestCommonPrefix = function (strs) {
  // if the arr is empty return an empty string. for test cases
  if (strs.length === 0) {
    return "";
  }
  // if there is one str in the arr, return the str. for test cases
  if (strs.length === 1) {
    return strs[0];
  }

  // take the first str as the comparison point if not the code finds only common letters not prefixes as intended
  let prefix = strs[0];

  // `i < strs.length - 1` as I always need a next str to compare my current str
  for (let i = 0; i < strs.length - 1; i++) {
    let j = 0;
    /* loop as long as:
    j is smaller than the first str
    j is smaller than the next str
    there is a common letter */
    while (
      j < prefix.length &&
      j < strs[i + 1].length &&
      prefix[j] === strs[i + 1][j]
    ) {
      j++;
    }

    /* slice only the common ones that goes from 0 to j. if I don't slice the prefix but strs[i] the
    code finds only common letters not prefixes as intended */
    prefix = prefix.slice(0, j);
  }
  return prefix;
};
