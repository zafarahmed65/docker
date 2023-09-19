import app from "./app.js";
import { SequelizeFactory } from "./src/drivers/SequelizeFactory.js";
import { Books } from "./src/models/books.js";

app.listen(3000, () => {
  console.log(`Server running on ${process.env.NODE_ENV}:`, 3000);

  // Sync the Books model with the database
  Books.sync({ force: true }) // Set force: true to drop existing table and re-create it
    .then(() => {
      console.log("Books table synchronized successfully.");
    })
    .catch((err) => {
      console.error("Error synchronizing the Books table:", err);
    });
});
