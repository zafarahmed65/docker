import { Books } from '../models/books.js';

export const getAll = async (req, res) => {
  const books = await Books.findAll();
  res.json(books);
};

export const getById = async (req, res) => {
  const book = await Books.findByPk(req.params.id);
  res.json(book);
};

export const getByPublication = async (req, res) => {
  const publication = req.params.publication;
  const books = await Books.findAll({
    where: {
      publication: publication,
    },
  });
  res.json(books);
};
