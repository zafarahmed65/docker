import { Books } from "../models/books.js";

export const getAll = async (req, res) => {
  try {
    const books = await Books.findAll();
    res.json(books);
  } catch (error) {
    console.error("Error fetching all books:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getById = async (req, res) => {
  try {
    const book = await Books.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    console.error("Error fetching book by ID:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getByPublication = async (req, res) => {
  try {
    const publication = req.params.publication;
    const books = await Books.findAll({
      where: {
        publication: publication,
      },
    });
    res.json(books);
  } catch (error) {
    console.error("Error fetching books by publication:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
