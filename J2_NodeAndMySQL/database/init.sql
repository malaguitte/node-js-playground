/**
* SAMPLE DATABASE TO TEST THE APP.
*/

CREATE DATABASE nodejs;

CREATE TABLE `nodejs`.`Person` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `firstname` VARCHAR(45) NOT NULL COMMENT '',
  `lastname` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT ''
);

CREATE TABLE `nodejs`.`Address` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `address` VARCHAR(200) NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT ''
);

CREATE TABLE `nodejs`.`PersonAddress` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `personid` INT NOT NULL COMMENT '',
  `addressid` INT NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT ''
);

ALTER TABLE `nodejs`.`PersonAddress` 
ADD INDEX `person_personid_idx` (`personid` ASC)  COMMENT '';
ALTER TABLE `nodejs`.`PersonAddress` 
ADD CONSTRAINT `fk_personid`
  FOREIGN KEY (`personid`)
  REFERENCES `nodejs`.`Person` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `nodejs`.`PersonAddress` 
ADD INDEX `fk_addressid_idx` (`addressid` ASC)  COMMENT '';
ALTER TABLE `nodejs`.`PersonAddress` 
ADD CONSTRAINT `fk_addressid`
  FOREIGN KEY (`addressid`)
  REFERENCES `nodejs`.`Address` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;



