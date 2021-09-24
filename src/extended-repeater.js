import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let answer = '';
  const keys = Object.keys(options);
  for (let i = 0; i < keys.length; i++) {
    if (typeof options[keys[i]] !== undefined) {
      if (options[keys[i]] === null) {
        options[keys[i]] = 'null';
      } else {
        options[keys[i]] = '' + options[keys[i]];
      }
    }
  }
  const getRepeat = function (str, count, separator) {
    let answer = '';
    for (let i = 0; i < count - 1; i++) {
      answer += str + separator;
    }

    return answer + str;
  }
  for (let i = 0; i < options.repeatTimes - 1; i++) {
    answer += str + getRepeat(options.addition || '', options.additionRepeatTimes || '', options.additionSeparator || '|');
    answer += options.separator || '+';
  }
  answer += str + getRepeat(options.addition || '', options.additionRepeatTimes || '', options.additionSeparator || '|')
  return answer;
}
