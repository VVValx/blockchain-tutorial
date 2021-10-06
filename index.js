const BlockChain = require("./classes/BlockChain");

const blockChain = new BlockChain();
blockChain.addBlock("one");
blockChain.addBlock("two");

console.log(blockChain.chain);
