import { Books } from "../models/books.js";

export const updateById = async (req, res) => {
  const book = await Books.findByPk(req.params.id);
  await book.update(req.body);
  res.json(book);
};
