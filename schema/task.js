// mongoose to define a model
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
MvSchema = new Schema({
    name: String,
    tasks: [String]
});
module.exports = mongoose.model("Task", MvSchema);
