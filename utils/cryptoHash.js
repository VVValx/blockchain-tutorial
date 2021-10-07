const crypto = require("crypto");

module.exports = (...args) =>
  crypto.createHash("sha256").update(args.sort().join(" ")).digest("hex");
