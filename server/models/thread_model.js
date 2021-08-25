const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
require('dotenv').config();

const commentSchema = mongoose.Schema({
  content: {
    type: String,
    required: [true, 'You need some content'],
  },

  author: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const threadSchema = mongoose.Schema({
  title: {
    type: String,
    maxLength: 100,
    required: [true, 'You need a title'],
  },

  content: {
    type: String,
    required: [true, 'You need some content'],
  },

  comments: {
    type: [commentSchema],
  },

  author: {
    type: String,
    required: [true, 'You need an author'],
  },
  category: {
    type: String,
    required: [true, 'Category required'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

threadSchema.plugin(aggregatePaginate);
commentSchema.plugin(aggregatePaginate);

const Thread = mongoose.model('Thread', threadSchema);
const Comment = mongoose.model('Comment', commentSchema);
module.exports = { Thread, Comment };
