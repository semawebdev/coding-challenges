/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false */

// SOLUTION I
var isValid = function (s) {
  // initialize empty stack
  let stack = [];

  // initialize an object to map through the opening symbols with the corresponding closing symbols
  let object = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // iterate over eaach character in the string starting from 0
  for (let i = 0; i < s.length; i++) {
    // for each character `s[i]`, check if it's an opening symbol
    if (Object.keys(object).includes(s[i])) {
      // if it's an opening symbol, push the corresponding closing symbol to the stack
      stack.push(object[s[i]]);
      /* if it's not an opening symbol, check two conditions: 
   - if the stack is empty, there is no corresponding opening symbol in the string; return false 
   - if the `s[i]` doesn't match the top/last element of the stack, it means the closing symbol doesn't have the corresponsing opening symbol; return false*/
    } else if (stack.length === 0 || s[i] !== stack.pop()) {
      return false;
    }
  }
  // after iterating through all the str, check if the stack is empty, it means all symbols matched; return true.
  return stack.length === 0;
};

/* note: `stack[stack.length-1]` does not modify the stack. it simply retrieves the top element. 
`stack.pop()`retrieves the top element of the stack and removes it from the stack. */

// SOLUTION II
var isValid = function (s) {
  let object = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = [];
  for (let ch of s) {
    // if ch exists as a key in object, it's an opening bracket
    if (object[ch]) {
      // push the corresponding closing bracket to the stack
      stack.push(object[ch]);
      // ch is a closing bracket and top of stack matches
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      // ch is a closing bracket and top of the stack doesn't match
      return false;
    }
  }
  return stack.length === 0;
};
