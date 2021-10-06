const db = require("mongoose");
module.exports = function () {
  db.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));
};
