import express from 'express';
import bukuController from './bukuControllers.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Buku
 *   description: API untuk manajemen data buku
 */

/**
 * @swagger
 * /api/buku:
 *   get:
 *     summary: Ambil semua data buku
 *     tags: [Buku]
 *     responses:
 *       200:
 *         description: Daftar semua buku
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   judul:
 *                     type: string
 *                     example: "Bumi"
 *                   pengarang:
 *                     type: string
 *                     example: "Tere Liye"
 *                   tahun:
 *                     type: integer
 *                     example: 2014
 */
router.get('/', bukuController.getAll);

/**
 * @swagger
 * /api/buku/{id}:
 *   get:
 *     summary: Ambil detail buku berdasarkan ID
 *     tags: [Buku]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detail buku
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 judul:
 *                   type: string
 *                   example: "Bumi"
 *                 pengarang:
 *                   type: string
 *                   example: "Tere Liye"
 *                 tahun:
 *                   type: integer
 *                   example: 2014
 *       404:
 *         description: Buku tidak ditemukan
 */
router.get('/:id', bukuController.getById);

/**
 * @swagger
 * /api/buku:
 *   post:
 *     summary: Tambah buku baru
 *     tags: [Buku]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - judul
 *               - pengarang
 *               - tahun
 *             properties:
 *               judul:
 *                 type: string
 *                 example: "Bumi"
 *               pengarang:
 *                 type: string
 *                 example: "Tere Liye"
 *               tahun:
 *                 type: integer
 *                 example: 2014
 *     responses:
 *       201:
 *         description: Buku berhasil ditambahkan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Buku berhasil ditambahkan
 */
router.post('/', bukuController.create);

/**
 * @swagger
 * /api/buku/{id}:
 *   put:
 *     summary: Perbarui data buku
 *     tags: [Buku]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               judul:
 *                 type: string
 *                 example: "Hujan"
 *               pengarang:
 *                 type: string
 *                 example: "Tere Liye"
 *               tahun:
 *                 type: integer
 *                 example: 2016
 *     responses:
 *       200:
 *         description: Buku berhasil diperbarui
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Buku berhasil diperbarui
 */
router.put('/:id', bukuController.update);

/**
 * @swagger
 * /api/buku/{id}:
 *   delete:
 *     summary: Hapus buku berdasarkan ID
 *     tags: [Buku]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Buku berhasil dihapus
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Buku berhasil dihapus
 *       404:
 *         description: Buku tidak ditemukan
 */
router.delete('/:id', bukuController.remove);

export default router;
