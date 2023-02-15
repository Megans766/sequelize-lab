const { Author } = require('../models')

const create = async (req, res) => {
  try {
    const author = await Author.create(req.body)
    res.status(200).json(author)
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports = {
  create,
}