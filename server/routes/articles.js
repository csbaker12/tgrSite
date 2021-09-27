const express = require('express');
let router = express.Router();
const { checkLoggedIn } = require('../middleware/auth');
const { grantAccess } = require('../middleware/roles');
const { Article } = require('../models/article_model');
const { sortArgsHelper } = require('../config/helpers');

router
  .route('/admin/addarticle')
  .post(
    checkLoggedIn,
    grantAccess('createAny', 'article'),
    async (req, res) => {
      try {
        const article = new Article({
          ...req.body,
        });

        const result = await article.save();
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ message: 'Error creating article', error });
      }
    }
  );

router
  .route('/admin/:id')
  .get(checkLoggedIn, grantAccess('readAny', 'article'), async (req, res) => {
    try {
      const _id = req.params.id;
      const article = await Article.findById(_id);
      if (!article || article.length === 0) {
        return res.status(400).json({ message: 'Article not found' });
      }
      res.status(200).json(article);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching article', error });
    }
  })
  .patch(
    checkLoggedIn,
    grantAccess('updateAny', 'article'),
    async (req, res) => {
      try {
        const article = await Article.findOneAndUpdate(
          { _id: req.params.id },
          { $set: req.body },
          { new: true }
        );
        if (!article)
          return res.status(400).json({ message: 'Article not found' });
        res.status(200).json(article);
      } catch (error) {
        res.status(400).json({ message: 'error finding article', error });
      }
    }
  )
  .delete(
    checkLoggedIn,
    grantAccess('deleteAny', 'article'),
    async (req, res) => {
      try {
        const _id = req.params.id;
        const article = await Article.findByIdAndRemove(_id);
        if (!article)
          return res.status(400).json({ message: 'Unable to find article' });
        res.status(200).json({ message: 'Article Deleted!' });
      } catch (error) {
        res.status(400).json({ message: 'error finding article', error });
      }
    }
  );

router
  .route('/admin/paginate')
  .post(checkLoggedIn, grantAccess('readAny', 'articles'), async (req, res) => {
    try {
      //   const aggQuery = Article.aggregate([
      //     { $match: { status: 'public' } },
      //     { $match: { title: { $regex: /title/ } } },
      //   ]);

      const limit = req.body.limit ? req.body.limit : 9;
      const aggQuery = Article.aggregate();
      const options = {
        page: req.body.page,
        limit,
        sort: { _id: 'desc' },
      };
      const articles = await Article.aggregatePaginate(aggQuery, options);
      res.status(200).json(articles);
    } catch (error) {
      res.status(400).json({ message: 'error fetching articles', error });
    }
  });

router.route('/getbyid/:id').get(async (req, res) => {
  try {
    const _id = req.params.id;
    const article = await Article.findById(_id);
    if (!article || article.length === 0) {
      return res.status(400).json({ message: 'Article not found' });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching article', error });
  }
});

router.route('/loadmore').post(async (req, res) => {
  try {
    let sortArgs = sortArgsHelper(req.body);
    const articles = await Article.find({})
      .sort([[sortArgs.sortBy, sortArgs.order]])
      .skip(sortArgs.skip)
      .limit(sortArgs.limit);
    res.status(200).json(articles);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching articles', error });
  }
});

router.route('/search').post(async (req, res) => {
  try {
    if (req.body.keywords == '') {
      return res.status(400).json({ message: 'No empty search' });
    }

    const re = new RegExp(`${req.body.keywords}`, 'gi');
    let aggQuery = Article.aggregate([{ $match: { title: { $regex: re } } }]);

    const limit = 5;
    const options = {
      page: req.body.page,
      limit,
      sort: { _id: 'desc' },
    };
    const articles = await Article.aggregatePaginate(aggQuery, options);
    res.status(200).json(articles);
  } catch (error) {
    res.status(400).json({ message: 'Error', error });
  }
});

module.exports = router;
