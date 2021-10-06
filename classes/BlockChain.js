const Block = require("./Block");
const random = require("../utils/random");

module.exports = class BlockChain {
  constructor() {
    const genesis = new Block("gen-data", "gen-hash", "gen-lastHash");
    this.chain = [genesis];
  }

  addBlock(data) {
    const lastHash = this.chain[this.chain.length - 1].hash;
    const hash = random(data + lastHash, 8);
    const block = new Block(data, hash, lastHash);
    this.chain.push(block);
  }
};
