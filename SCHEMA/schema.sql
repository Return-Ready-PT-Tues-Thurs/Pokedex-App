use pokedex;


DROP TABLE pokeman IF EXISTS;
CREATE TABLE pokeman IF NOT EXISTS (
Id INTEGER PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(32),  
image varchar(256)
); 

DROP TABLE types IF EXISTS;
CREATE TABLE types IF NOT EXISTS ( 
pokemanId INTEGER AUTO_INCREMENT,  
TypeName VARCHAR(256) PRIMARY KEY
); 

DROP TABLE pokeman_types IF EXISTS;
CREATE TABLE pokeman_types IF NOT EXISTS (
mappingId INTEGER PRIMARY KEY AUTO_INCREMENT,
pokeID integer,  
typeid integer
foreign key (pokeID) references pokeman(ID),
foreign key (typeid) references types(TypeName)
); 