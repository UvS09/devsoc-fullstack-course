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

