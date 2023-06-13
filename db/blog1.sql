-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 13 juin 2023 à 16:24
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `blog1`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id_categ` int(11) NOT NULL,
  `nom_categ` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id_categ`, `nom_categ`) VALUES
(1, 'Entremets Individuels'),
(2, 'Gâteaux à partager');

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prix` int(11) DEFAULT NULL,
  `legende` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `nom_categ` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id`, `nom`, `prix`, `legende`, `image`, `nom_categ`) VALUES
(0, 'HIBISCUS COCO', 4, 'Pâtisserie individuelle Hibiscus Coco : mousse Noix de Coco intense, cœur coulant à la Fleur d’Hibiscus (Bissap), dacquoise amande, biscuit coco amande, velours blanc et biscuit sablé chocolat blanc noix de coco.', '/web/blog/image/coco.webp', 1),
(1, 'PURE NOISETTE', 5, 'Pure Noisette : fine couche de chocolat croquant, mousse légère à la noisette, biscuit dacquoise noisette, insert praliné noisette maison, biscuit sablé à la noisette, tourbillon de ganache noisette et morceaux de noisettes croquantes.', '/web/blog/image/noisette', 1),
(2, 'STONE PISTACHE-FRAMBOISE', 4, 'Stone Pistache-Framboise : mousse à la pistache d’Iran, madeleine pistache, insert coulant à la framboise, éclats de pistaches torréfiées, glaçage miroir, biscuit sablé. Au dessus : ganache pistache, insert praliné pistache d’Iran, spray velours.', '/web/blog/image/pistache.webp', 1),
(3, 'TARTELETTE CITRON', 5, 'Fond de crème d’amande, croustillant praliné noisette, feuilletine, succulente crème au citron,  crème à la vanille, le tout délicatement déposé sur un délicieux biscuit sablé amande.', '/web/blog/image/citron.webp', 1),
(4, 'PALET PRALINÉ CHOCOLAT', 5, 'Palet Praliné Chocolat individuel : mousse légère au chocolat 64% de cacao, insert praliné amande-noisette, dacquoise amande, le tout revêtu d’un glaçage miroir, déposé sur un délicieux biscuit croustillant reconstitué au cacao.', '/web/blog/image/pralin.jpg', 1),
(5, 'PURE VANILLE', 5, 'Pure Vanille : crème onctueuse à la Vanille de Madagascar, biscuit amande, ganache montée à la vanille de Madagascar, praliné noisette-amande, glaçage miroir chocolat blanc vanille, macaron vanille-praliné, biscuit sablé à la vanille.', '/web/blog/image/vanille.webp', 1),
(6, 'COCO MANGUE PASSION', 5, 'Coco Mangue Passion : bavaroise légère à la noix de coco, rôti mangue-passion, enrobage au chocolat blanc et chocolat au lait, biscuit sablé à la Noix de Coco.', '/web/blog/image/mange.webp', 1),
(8, 'TETAR CHOC', 4, 'Tetar Choco : croustillant chocolat, sablé chocolat, crème d’amande, chou à la vanille, crème au chocolat Namelaka 55% de Valrhona®, éclats de fèves de cacao torréfiées et concassées.', '/web/blog/image/choc.jpg', 1),
(9, 'CAFÉCA', 4, 'Caféca : biscuit breton chocolat, crémeux au Café du Panama, cœur coulant Praliné Cacahuète maison, nuage noix de coco vanille, tuile chocolat.', '/web/blog/image/cafe.webp', 1),
(10, 'TARTELETTE VANILLE-NOISETTE', 5, 'Tartelette Vanille-Noisette : cœur de praliné noisette maison, ganache montée à la vanille, croustillant praliné, crème d’amande vanillée, biscuit sablé.', '/web/blog/image/tartelette-vanille-noisette.jpg.webp', 1),
(11, 'NOISETTE', 5, 'Noisette : pâte sucrée, crème légère à la noisette, insert praliné, dacquoise praliné, coque au chocolat blanc croquant décorée de sa feuille de chocolat noir.', '/web/blog/image/NOISETTE-patisserie-individuelle-livraison-region-parisienne-1.jpg.webp', 1),
(12, 'ROYAL CACAHUÈTE', 6, 'Royal Cacahuète : mousse légère à la vanille de Madagascar, cœur de praliné cacahuète maison, biscuit breton, nappage neutre, cacahuètes.', '/web/blog/image/royal-cacahuete-1.jpg.webp', 1),
(13, 'PALET PRALINÉ CHOCOLAT', 47, 'Entremet Palet Praliné Chocolat : mousse légère au chocolat 64% de cacao, insert praliné amande-noisette, dacquoise amande, le tout revêtu d’un glaçage miroir, déposé sur un délicieux biscuit croustillant reconstitué au cacao. 10 à 12 parts.', '/web/blog/image/palet-praline-chocolat-a-partager.jpg', 2),
(14, 'CARAVANILLE', 47, 'Entremet Caravanille : mousse légère extra vanillée à la vanille de Madagascar, crémeux au caramel à la fleur de sel, biscuit madeleine vanille & miel, croustillant au spéculoos, glaçage miroir extra vanillé. 10 à 12 parts', '/web/blog/image/entremet-caravanille-10-12-personnes-1.jpg', 2),
(15, 'BULLE DE SAVEURS FRAMBOISE CHOCOLAT BLANC', 4, 'Bulle de saveurs Framboise Chocolat Blanc : mousse au chocolat blanc, cœur coulant à la framboise, chocolat blanc  coulant, biscuit dacquoise à la vanille, glaçage miroir vanille et croustillant chocolat blanc feuilletine.', 'http://localhost/web/blog/image/individuelle-framboise-chocolat-blanc.jpg.webp', 1),
(16, 'LAYER CAKE CHOCO NUTELLA®', 45, 'Layer Cake Choco Nutella®: génoise, crème au Nutella®. 8 à 10 parts.', 'http://localhost/web/blog/image/layer-cake-choco-nutella-flexipatisserie.jpg', 2),
(18, 'LAYER CAKE GOURMAND', 45, 'Layer Cake Gourmand: génoise garnie d’une crème à la vanille, d’un fabuleux caramel au beurre salé maison mêlé à ses cacahuètes torréfiées et de spéculoos. 8 à 10 parts.', 'http://localhost/web/blog/image/layer-cake-gourmand-flexipatisserie.jpg.webp', 2),
(19, 'NUMBER CAKE AU CHOCOLAT & NUTELLA®', 40, 'Number Cake au Chocolat & Nutella®: crémeux au nutella®, biscuit sablé amande, généreuse garniture de chocolats et autres gourmandises chocolatées. 8 parts environ.', 'http://localhost/web/blog/image/number-cake-chocolat-nutella-600.jpg', 2),
(20, 'NUMBER CAKE AUX FRUITS', 40, 'Number Cake aux fruits: crémeux à la vanille de Madagascar, biscuit sablé amande, généreuse garniture de fruits frais. Idéal comme gâteau d’anniversaire personnalisé. 8 parts environ.', 'http://localhost/web/blog/image/number-cake-gateau-d-anniversaire-livraison-det600.jpg', 2),
(49, 'NUMBER CAKE AU CHOCOLAT & NUTELLA®', 50, 'Number Cake au Chocolat & Nutella®: crémeux au nutella®, biscuit sablé amande, généreuse garniture de chocolats et autres gourmandises chocolatées. 8 parts environ.', 'http://localhost/web/blog/image/number-cake-chocolat-nutella-600.jpg', 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(100) DEFAULT NULL,
  `mdp` varchar(100) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `confirmationMDP` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `pseudo`, `mdp`, `mail`, `confirmationMDP`) VALUES
(6, 'orelabk6', 'orel', 'orelabk6@gmail.com', 'orel'),
(7, 'admin', 'admin', 'admin@admin.fr', 'admin'),
(8, 'azerty', 'azerty', 'azerty@azerty.fr', 'azerty'),
(12, 'demo', 'demo', 'demo', 'demo');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_categ`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categ` (`nom_categ`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `produits`
--
ALTER TABLE `produits`
  ADD CONSTRAINT `produits_ibfk_1` FOREIGN KEY (`nom_categ`) REFERENCES `categories` (`id_categ`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
