const Block = require("./Block");
const cryptoHash = require("../utils/cryptoHash");

module.exports = class BlockChain {
  constructor() {
    const genesis = Block.genesis();
    this.chain = [genesis];
  }

  addBlock(data) {
    const lastBlock = this.chain[this.chain.length - 1];
    const block = Block.mineBlock(lastBlock, data);

    this.chain.push(block);
  }

  replaceChain(chain) {
    if (chain.length <= this.chain.length)
      return console.log("The incoming chain must be longer");
    if (!BlockChain.isValid(chain))
      return console.log("The incoming chain is not valid");

    console.log("Replacing chain with ", chain);
    this.chain = chain;
  }

  static isValid(chain) {
    const genesis = Block.genesis();
    if (JSON.stringify(chain[0]) !== JSON.stringify(genesis)) return false;

    for (let i = 1; i < chain.length; i++) {
      const { timeStamp, lastHash, hash, data } = chain[i];
      const testHash = cryptoHash(timeStamp, lastHash, data);

      if (lastHash !== chain[i - 1].hash) return false;
      if (testHash !== hash) return false;
    }

    return true;
  }
};
