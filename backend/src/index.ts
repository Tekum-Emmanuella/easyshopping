import express from 'express';

const app = express();
const PORT = 3000; 

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Make your shopping easier!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});