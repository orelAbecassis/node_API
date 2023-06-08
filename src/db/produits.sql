DROP DATABASE IF EXISTS blognode;
CREATE DATABASE IF NOT EXISTS blognode;
USE blognode;

DROP TABLE IF EXISTS produits;

CREATE TABLE IF NOT EXISTS produits
(
    id  INT PRIMARY KEY auto_increment,
    nom_produit VARCHAR(25) UNIQUE NOT NULL,
    prix INT(11) DEFAULT 0,
    legende VARCHAR(50) NOT NULL,
    image VARCHAR(100)  NOT NULL,
--     role  EMUN('Admin', 'SuperUser') DEFAULT 'SuperUser',
    age INT(11) DEFAULT 0
    );
