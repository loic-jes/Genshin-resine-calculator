-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 14 jan. 2021 à 12:57
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `meren.fr`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `ID` int(255) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(255) NOT NULL DEFAULT '1',
  `active` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `login` (`login`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`ID`, `login`, `name`, `password`, `role`, `active`) VALUES
(1, 'merenzor@gmail.com', 'Merenween', 'Rk54RTBjb2xZMkhGanEzeQ$ug5Kd/B9BXqIAswjoaChTQ', 1, 1),
(2, 'aaa@aaa.aaa', 'a', 'aaaa', 1, 1),
(3, 'plusqueprofessionnel@jereussistout.gg', 'MaîtreDuMonde', 'cGNGUEhyN2ozaVJ0ZHhPVg$hYK0nyZbmF2xZymj9M5HMGsQrn3Beo8QMPR9a7U/CXQ', 1, 1),
(4, 'bbb@bbb.bbb', 'b', 'RlNRV0JPNHF1M0ZzVkFONg$bGTamTFuIeNl1bfKiE6s9hDSDGCZqt3Xzo/OmrG0kdU', 1, 1),
(5, 'ccc@ccc.ccc', 'c', 'WWwvaUduMHQyMzlhUHVFcQ$ODA8FeMP3sl4P0fKvthzmaLq4ZkJoE8L77Ep0wYeUnU', 1, 1),
(6, 'namir@namir.namir', 'Namir', 'NzZyR2NPczNOb1hHS2lBZQ$ZuuwJwxSmypxAX8nSyxOBNb/TT/pAkVrpW4Wj6k2UA8', 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
