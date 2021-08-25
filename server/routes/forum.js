const express = require('express');
let router = express.Router();
const { checkLoggedIn } = require('../middleware/auth');
const { grantAccess } = require('../middleware/roles');
const { Thread } = require('../models/thread_model');
// const { Comment } = require('../models/comment_model');
const { sortArgsHelper } = require('../config/helpers');

router
  .route('/createthread')
  .post(checkLoggedIn, grantAccess('createAny', 'thread'), async (req, res) => {
    try {
      const thread = new Thread({
        ...req.body,
      });

      const result = await thread.save();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: 'Error creating thread', error });
    }
  });

router
  .route('/thread/:id')
  .get(async (req, res) => {
    try {
      const _id = req.params.id;
      const thread = await Thread.findById(_id);
      if (!thread || thread.length === 0) {
        return res.status(400).json({ message: 'Thread not found' });
      }
      res.status(200).json(thread);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching Thread', error });
    }
  })
  .delete(
    checkLoggedIn,
    grantAccess('deleteAny', 'thread'),
    async (req, res) => {
      try {
        const _id = req.params.id;
        const thread = await Thread.findByIdAndRemove(_id);
        if (!thread)
          return res.status(400).json({ message: 'Unable to find thread' });
        res.status(200).json({ message: 'Thread Deleted!' });
      } catch (error) {
        res.status(400).json({ message: 'error finding thread', error });
      }
    }
  );

router.route('/loadmore').post(async (req, res) => {
  try {
    let sortArgs = sortArgsHelper(req.body);
    const threads = await Thread.find({})
      .sort([[sortArgs.sortBy, sortArgs.order]])
      .skip(sortArgs.skip)
      .limit(sortArgs.limit);
    res.status(200).json(threads);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching threads', error });
  }
});

router
  .route('/paginate')
  .post(checkLoggedIn, grantAccess('readAny', 'threads'), async (req, res) => {
    try {
      //   const aggQuery = Article.aggregate([
      //     { $match: { status: 'public' } },
      //     { $match: { title: { $regex: /title/ } } },
      //   ]);

      const limit = req.body.limit ? req.body.limit : 9;
      const aggQuery = Thread.aggregate();
      const options = {
        page: req.body.page,
        limit,
        sort: { _id: 'desc' },
      };
      const threads = await Thread.aggregatePaginate(aggQuery, options);
      res.status(200).json(threads);
    } catch (error) {
      res.status(400).json({ message: 'error fetching threads', error });
    }
  });

router
  .route('/thread/:id/addcomment')
  .post(
    checkLoggedIn,
    grantAccess('createAny', 'comments'),
    async (req, res) => {
      try {
        const _id = req.params.id;

        const thread = await Thread.findOneAndUpdate(
          { _id },
          {
            $push: {
              comments: req.body.comment,
            },
          },
          { new: true }
        );
        if (!thread)
          return res.status(400).json({ message: 'Thread not found' });
        res.status(200).json(thread);
      } catch (error) {
        res.status(400).json({ message: 'Error adding comment', error });
      }
    }
  );

module.exports = router;
