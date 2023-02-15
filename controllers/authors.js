const { Author } = require('../models')

const create = async (req, res) => {
  try {
    const author = await Author.create(req.body)
    res.status(200).json(author)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const authors = await Author.findAll()
    res.status(200).json(authors)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id)
    author.set(req.body)
    await author.save()
    res.status(200).json(author)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id)
    await author.destroy()
    res.status(200).json(author)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteAuthor
}