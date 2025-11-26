const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//CREATE
router.post('/create', async (req, res) => {
  try {
    // expects { title, body, user }
    const post = await Post.create(req.body);
    res.status(201).json({ success: true, data: post });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

//READ
router.get('/all', async (req, res) => {
  try {
    const posts = await Post.find().populate('user');
    res.json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

//READ ONE POST
router.get('/get/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('user');

    if (!post) {
      return res
        .status(404)
        .json({ success: false, error: 'Post not found' });
    }

    res.json({ success: true, data: post });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Invalid post ID' });
  }
});

//FILTER POSTS CREATED AFTER A DATE
router.get('/after/:date', async (req, res) => {
  try {
    const posts = await Post.find({
      createdAt: { $gt: new Date(req.params.date) }
    });
    res.json({ success: true, data: posts });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

//SEARCH PART OF A BODY/TITLE
router.get('/search/:keyword', async (req, res) => {
  try {
    const posts = await Post.find({
      title: { $regex: req.params.keyword, $options: 'i' }
    });
    res.json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

//SORTING POSTS BY NEWEST FIRST
router.get('/sort/newest', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

//SORTING ALPHABETICALLY BY TITLE
router.get('/sort/title', async (req, res) => {
  try {
    const posts = await Post.find().sort({ title: 1 });
    res.json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

//UPDATE
router.put('/update/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!post) {
      return res
        .status(404)
        .json({ success: false, error: 'Post not found' });
    }

    res.json({ success: true, data: post });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

//DELETE
router.delete('/delete/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res
        .status(404)
        .json({ success: false, error: 'Post not found' });
    }

    res.json({ success: true, message: 'Post deleted' });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Invalid post ID' });
  }
});

module.exports = router;

