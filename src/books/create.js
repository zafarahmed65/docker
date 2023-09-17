import { Books } from "../models/books.js";

export const create = async (req, res) => {		
	const booksData = req.body;
	const book = Books.build(booksData);
	await book.save();
	res.json(book);
}