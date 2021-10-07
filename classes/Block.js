const moment = require("moment");
const genData = require("../config/genData");
const cryptoHash = require("../utils/cryptoHash");

module.exports = class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis() {
    const { timestamp, lastHash, hash, data } = genData;
    return new this(timestamp, lastHash, hash, data);
  }

  static mineBlock(lastBlock, data) {
    const timestamp = moment();
    const lastHash = lastBlock.hash;

    return new this(
      timestamp,
      lastHash,
      cryptoHash(timestamp, lastHash, data),
      data
    );
  }
};
