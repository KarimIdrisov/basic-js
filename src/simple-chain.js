import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chains: [],
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // return this.chains.length;
  },
  addLink(value) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // if (value === null) {
    //   this.chains.push('null');
    // } else {
    //   this.chains.push(value.toString());
    // }
    // return this;
  },
  removeLink(position) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // if (position === 0 || position < 0 || typeof position !== 'number' || position >= this.chains.length) { throw 'You can\'t remove incorrect link!'; }
    // this.chains = this.chains.slice(0, position - 1).concat(this.chains.slice(position));
    // return this;
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // this.chains - this.chains.reverse();
    // return this;
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    //   let str = '';
    //   for (let i = 0; i < this.chains.length - 1; i++) {
    //     str += `( ${this.chains[i]} )~~`;
    //   }

    //   return str + `( ${this.chains[this.chains.length - 1]} )`;
  }
};
