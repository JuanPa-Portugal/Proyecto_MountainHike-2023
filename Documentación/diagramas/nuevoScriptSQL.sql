-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ispcdjango
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ispcdjango
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ispcdjango` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ispcdjango` ;

-- -----------------------------------------------------
-- Table `ispcdjango`.`ispcproject_admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ispcdjango`.`ispcproject_admin` (
  `id_admin` INT NOT NULL,
  `correo` VARCHAR(30) NOT NULL,
  `contraseña` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id_admin`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ispcdjango`.`ispcproject_blog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ispcdjango`.`ispcproject_blog` (
  `id_blog` INT NOT NULL,
  `fecha` DATE NOT NULL,
  `imagen` VARCHAR(200) NOT NULL,
  `titulo` VARCHAR(100) NOT NULL,
  `articulo` LONGTEXT NOT NULL,
  `admin_id` INT NOT NULL,
  PRIMARY KEY (`id_blog`),
  INDEX `ispcproject_blog_admin_id_36b46a68_fk_ispcproject_admin_id_admin` (`admin_id` ASC) VISIBLE,
  CONSTRAINT `ispcproject_blog_admin_id_36b46a68_fk_ispcproject_admin_id_admin`
    FOREIGN KEY (`admin_id`)
    REFERENCES `ispcdjango`.`ispcproject_admin` (`id_admin`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ispcdjango`.`ispcproject_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ispcdjango`.`ispcproject_usuario` (
  `id_usuario` INT NOT NULL,
  `nombre` VARCHAR(30) NOT NULL,
  `apellido` VARCHAR(30) NOT NULL,
  `edad` INT NOT NULL,
  `telefono` VARCHAR(20) NOT NULL,
  `ciudad` VARCHAR(30) NOT NULL,
  `email` VARCHAR(254) NOT NULL,
  `contraseña` VARCHAR(30) NOT NULL,
  `estado_reserva` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ispcdjango`.`ispcproject_factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ispcdjango`.`ispcproject_factura` (
  `id_factura` BIGINT NOT NULL,
  `total` INT NOT NULL,
  `tipo` INT NOT NULL,
  `fecha_apertura` DATE NOT NULL,
  `fecha_cierre` DATE NOT NULL,
  `id_usuario_id` INT NOT NULL,
  PRIMARY KEY (`id_factura`),
  INDEX `ispcproject_factura_id_usuario_id_41b7acf6_fk_ispcproje` (`id_usuario_id` ASC) VISIBLE,
  CONSTRAINT `ispcproject_factura_id_usuario_id_41b7acf6_fk_ispcproje`
    FOREIGN KEY (`id_usuario_id`)
    REFERENCES `ispcdjango`.`ispcproject_usuario` (`id_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ispcdjango`.`ispcproject_guia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ispcdjango`.`ispcproject_guia` (
  `id_guia` INT NOT NULL,
  `nombre` VARCHAR(30) NOT NULL,
  `apellido` VARCHAR(30) NOT NULL,
  `foto` VARCHAR(200) NOT NULL,
  `reseña` LONGTEXT NOT NULL,
  `admin_id` INT NOT NULL,
  PRIMARY KEY (`id_guia`),
  INDEX `ispcproject_guia_admin_id_6b84ae94_fk_ispcproject_admin_id_admin` (`admin_id` ASC) VISIBLE,
  CONSTRAINT `ispcproject_guia_admin_id_6b84ae94_fk_ispcproject_admin_id_admin`
    FOREIGN KEY (`admin_id`)
    REFERENCES `ispcdjango`.`ispcproject_admin` (`id_admin`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ispcdjango`.`ispcproject_recorrido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ispcdjango`.`ispcproject_recorrido` (
  `id_recorrido` INT NOT NULL,
  `nombre` VARCHAR(30) NOT NULL,
  `nivel` VARCHAR(30) NOT NULL,
  `imagen` VARCHAR(200) NOT NULL,
  `costo` DECIMAL(10,2) NOT NULL,
  `fecha_recorrido` DATE NOT NULL,
  `admin_id` INT NOT NULL,
  `id_guia_id` INT NOT NULL,
  PRIMARY KEY (`id_recorrido`),
  INDEX `ispcproject_recorrid_admin_id_31530921_fk_ispcproje` (`admin_id` ASC) VISIBLE,
  INDEX `ispcproject_recorrid_id_guia_id_4824b617_fk_ispcproje` (`id_guia_id` ASC) VISIBLE,
  CONSTRAINT `ispcproject_recorrid_admin_id_31530921_fk_ispcproje`
    FOREIGN KEY (`admin_id`)
    REFERENCES `ispcdjango`.`ispcproject_admin` (`id_admin`),
  CONSTRAINT `ispcproject_recorrid_id_guia_id_4824b617_fk_ispcproje`
    FOREIGN KEY (`id_guia_id`)
    REFERENCES `ispcdjango`.`ispcproject_guia` (`id_guia`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ispcdjango`.`ispcproject_reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ispcdjango`.`ispcproject_reserva` (
  `id_reserva` INT NOT NULL,
  `fecha_reserva` DATE NOT NULL,
  `nro_reserva` INT NOT NULL,
  `valor` INT NOT NULL,
  `id_factura_id` BIGINT NOT NULL,
  `id_recorrido_id` INT NOT NULL,
  `id_usuario_id` INT NOT NULL,
  PRIMARY KEY (`id_reserva`),
  INDEX `ispcproject_reserva_id_factura_id_53460535_fk_ispcproje` (`id_factura_id` ASC) VISIBLE,
  INDEX `ispcproject_reserva_id_recorrido_id_5b427191_fk_ispcproje` (`id_recorrido_id` ASC) VISIBLE,
  INDEX `ispcproject_reserva_id_usuario_id_06759875_fk_ispcproje` (`id_usuario_id` ASC) VISIBLE,
  CONSTRAINT `ispcproject_reserva_id_factura_id_53460535_fk_ispcproje`
    FOREIGN KEY (`id_factura_id`)
    REFERENCES `ispcdjango`.`ispcproject_factura` (`id_factura`),
  CONSTRAINT `ispcproject_reserva_id_recorrido_id_5b427191_fk_ispcproje`
    FOREIGN KEY (`id_recorrido_id`)
    REFERENCES `ispcdjango`.`ispcproject_recorrido` (`id_recorrido`),
  CONSTRAINT `ispcproject_reserva_id_usuario_id_06759875_fk_ispcproje`
    FOREIGN KEY (`id_usuario_id`)
    REFERENCES `ispcdjango`.`ispcproject_usuario` (`id_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
