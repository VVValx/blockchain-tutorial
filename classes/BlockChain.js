const Block = require("./Block");
const moment = require("moment");

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
};
