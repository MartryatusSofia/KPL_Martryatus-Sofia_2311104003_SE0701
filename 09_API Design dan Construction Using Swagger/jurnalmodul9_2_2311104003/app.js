const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { Mahasiswa, mahasiswaList } = require('./mahasiswa');

const app = express();
const port = 3000;


app.use(express.json());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.redirect('/swagger');
});

app.get('/api/mahasiswa', (req, res) => {
    res.json(mahasiswaList);
});

app.get('/api/mahasiswa/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (!isNaN(id) && id >= 0 && id < mahasiswaList.length) {
        res.json(mahasiswaList[id]);
    } else {
        res.status(404).send('Mahasiswa tidak ditemukan');
    }
});

// POST tambah mahasiswa baru
app.post('/api/mahasiswa', (req, res) => {
    const { name, nim, course, year } = req.body;
    if (name && nim && course && year) {
        const mahasiswaBaru = new Mahasiswa(name, nim, course, year);
        mahasiswaList.push(mahasiswaBaru);
        res.status(201).send('Mahasiswa berhasil ditambahkan');
    } else {
        res.status(400).send('Data Mahasiswa tidak lengkap');
    }
});

// DELETE mahasiswa berdasarkan ID
app.delete('/api/mahasiswa/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (!isNaN(id) && id >= 0 && id < mahasiswaList.length) {
        mahasiswaList.splice(id, 1);
        res.send('Mahasiswa berhasil dihapus');
    } else {
        res.status(404).send('Mahasiswa tidak ditemukan');
    }
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
