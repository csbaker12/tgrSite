const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
require('dotenv').config();

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    maxLength: 100,
    required: [true, 'You need a title'],
  },

  content: {
    type: String,
    required: [true, 'You need some content'],
  },

  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    // required: [true, 'Category required'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

articleSchema.plugin(aggregatePaginate);

const Article = mongoose.model('Article', articleSchema);
module.exports = { Article };
