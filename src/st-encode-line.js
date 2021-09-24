import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let currCount = 1;
  let currElement = str[0];
  let answer = '';
  for (let i = 1; i < str.length; i++) {
    if (currElement === str[i]) {
      currCount += 1;
    } else {
      if (currCount > 1) {
        answer += currCount + currElement;
      } else {
        answer += currElement;
      }
      currElement = str[i];
      currCount = 1;
    }
    if (i === str.length - 1) {
      if (currCount > 1) {
        answer += currCount + currElement;
      } else {
        answer += currElement;
      }
    }
  }
  return answer;
}
