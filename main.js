var mongoose = require('mongoose');

var MainSchema = new mongoose.Schema({
  lat:{
    type : String
  },
  lon:{
    type: String
  },
  date:{
    type : Date,
    default: Date.now
  }
});
var mains = mongoose.model('main', MainSchema);
module.exports = mains;
