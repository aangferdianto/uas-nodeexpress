import db from './config/db.js';

const getAll = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM buku', (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const getById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM buku WHERE id = ?', [id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const create = (judul, pengarang, tahun) => {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO buku (judul, pengarang, tahun) VALUES (?, ?, ?)',
      [judul, pengarang, tahun],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};

const update = (id, judul, pengarang, tahun) => {
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE buku SET judul = ?, pengarang = ?, tahun = ? WHERE id = ?',
      [judul, pengarang, tahun, id],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};

const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM buku WHERE id = ?', [id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

export default { getAll, getById, create, update, remove };
