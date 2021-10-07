const BlockChain = require("./classes/BlockChain");

const chain = new BlockChain();
chain.addBlock([
  {
    id: 1,
    name: "val",
  },
]);

console.log(chain);
