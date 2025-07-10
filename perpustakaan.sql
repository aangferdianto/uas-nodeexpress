CREATE DATABASE IF NOT EXISTS perpustakaan;
USE perpustakaan;

CREATE TABLE IF NOT EXISTS buku (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  pengarang VARCHAR(255) NOT NULL,
  tahun INT NOT NULL
);

INSERT INTO buku (judul, pengarang, tahun) VALUES
('Laskar Pelangi', 'Andrea Hirata', 2005),
('Bumi', 'Tere Liye', 2014),
('Negeri 5 Menara', 'Ahmad Fuadi', 2009),
('Ayat-Ayat Cinta', 'Habiburrahman El Shirazy', 2004),
('Dilan 1990', 'Pidi Baiq', 2014),
('Ronggeng Dukuh Paruk', 'Ahmad Tohari', 1982),
('Cantik Itu Luka', 'Eka Kurniawan', 2002),
('Perahu Kertas', 'Dewi Lestari', 2009),
('Koala Kumal', 'Raditya Dika', 2015),
('Hujan', 'Tere Liye', 2016);
