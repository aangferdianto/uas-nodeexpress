import Buku from './bukuModels.js';

const getAll = async (req, res) => {
    try {
        const result = await Buku.getAll();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: 'Gagal mengambil data buku', error: err.message });
    }
};

const getById = async (req, res) => {
    try {
        const result = await Buku.getById(req.params.id);
        if (result.length === 0) return res.status(404).json({ message: 'Buku tidak ditemukan' });
        res.status(200).json(result[0]);
    } catch (err) {
        res.status(500).json({ message: 'Gagal mengambil detail buku', error: err.message });
    }
};

const create = async (req, res) => {
    try {
        const { judul, pengarang, tahun } = req.body;
        await Buku.create(judul, pengarang, tahun);
        res.status(201).json({ message: 'Buku berhasil ditambahkan' });
    } catch (err) {
        res.status(500).json({ message: 'Gagal menambahkan buku', error: err.message });
    }
};

const update = async (req, res) => {
    try {
        const { judul, pengarang, tahun } = req.body;
        await Buku.update(req.params.id, judul, pengarang, tahun);
        res.status(200).json({ message: 'Buku berhasil diperbarui' });
    } catch (err) {
        res.status(500).json({ message: 'Gagal memperbarui buku', error: err.message });
    }
};

const remove = async (req, res) => {
    try {
        await Buku.remove(req.params.id);
        res.status(200).json({ message: 'Buku berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ message: 'Gagal menghapus buku', error: err.message });
    }
};

export default { getAll, getById, create, update, remove };
