import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let answer = {};

  const add = (str) => {
    if (answer.hasOwnProperty(str)) {
      answer[str] += 1
    } else {
      answer[str] = 1;
    }
  }

  for (let i = 0; i < domains.length; i++) {
    const str = domains[i].split('.');
    let currStr = '';
    for (let j = str.length - 1; j >= 0; j--) {
      currStr += '.' + str[j];
      add(currStr);
    }
  }

  return answer;
}
