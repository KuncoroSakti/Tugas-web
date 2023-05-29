const express = require('express');
const app = express();

// Mengatur folder 'public' sebagai folder statis
app.use(express.static('public'));

// Menangani permintaan GET ke endpoint '/data'
app.get('/data', (req, res) => {
  const data = { message: 'Ini adalah data dari endpoint' };
  res.json(data);
});

// Menjalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});