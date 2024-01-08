-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2024 at 09:07 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2201851_alyanurfaridah_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Table structure for table `peminjamanbuku_alyanurfaridah`
--

CREATE TABLE `peminjamanbuku_alyanurfaridah` (
  `id` int(11) NOT NULL,
  `judul_buku` varchar(150) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `nama_peminjam` varchar(60) NOT NULL,
  `alamat_peminjam` text NOT NULL,
  `noHp_peminjam` varchar(20) NOT NULL,
  `tanggal_pinjam` date NOT NULL,
  `tanggal_pengembalian` date NOT NULL,
  `lama_pinjam` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peminjamanbuku_alyanurfaridah`
--

INSERT INTO `peminjamanbuku_alyanurfaridah` (`id`, `judul_buku`, `jumlah`, `nama_peminjam`, `alamat_peminjam`, `noHp_peminjam`, `tanggal_pinjam`, `tanggal_pengembalian`, `lama_pinjam`) VALUES
(1, 'Bumi', 1, 'Alifiaa', 'Jogja', '085263478123', '2023-12-01', '2023-12-07', '7 hari'),
(2, 'Bulan', 1, 'Aqiila', 'Cibubur', '087623416345', '2023-12-03', '2023-12-11', '8 hari'),
(3, 'Tentang Kamu', 1, 'Farhan', 'Bandung', '087654134573', '2023-12-10', '2023-12-22', '12 hari'),
(4, 'Pulang', 2, 'Keita', 'Cimahi', '082347886542', '2023-12-05', '2023-12-20', '15 hari');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `peminjamanbuku_alyanurfaridah`
--
ALTER TABLE `peminjamanbuku_alyanurfaridah`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `peminjamanbuku_alyanurfaridah`
--
ALTER TABLE `peminjamanbuku_alyanurfaridah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
