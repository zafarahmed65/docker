import { Books } from '../models/books.js';

export const deleteById = async (req, res) => {
  const book = await Books.findByPk(req.params.id);
  await book?.destroy();
  res.json(book);
};

export const deleteAll = async (req, res) => {
  await Books.destroy({
    where: {},
    truncate: false,
  });
  res.json({ message: 'All books deleted' });
};

export const deletePublication = async (req, res) => {
  const publication = req.params.publication;
  await Books.destroy({
    where: {
      publication: publication,
    },
  });
  res.json({ message: `Books by ${publication}deleted` });
};
