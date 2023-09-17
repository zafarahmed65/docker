import app from './app.js';

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server running on ${process.env.NODE_ENV}:`, PORT)
);
