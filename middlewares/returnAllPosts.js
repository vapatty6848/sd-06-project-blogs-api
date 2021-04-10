const { BlogPost, User } = require('../models');

const returnAllPosts = async (req, res, next) => {
  const { q } = req.query;

  if (!q) {
    const emptySearch = await BlogPost.findAll({
      include: [{
        model: User,
        as: 'user',
      }],
      attributes: { exclude: ['userId'] },
    });
    return res.status(200).json(emptySearch);
  }

  next();
};

module.exports = returnAllPosts;
