CREATE DATABASE g89;

\l  // para listar las bases de datos

\c g89 // para conectarse a la base de datos

CREATE TABLE Usuarios(
    id SERIAL,
    nombre VARCHAR(30),
    edad INT,
    password VARCHAR(16),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Productos(
    id SERIAL,
    nombre VARCHAR(30),
    precio INT,
    description TEXT
);

\dt // para listar las tablas

INSERT INTO Usuarios(nombre, edad, password) VALUES('Juan', 20, '123456');
INSERT INTO Usuarios(nombre, edad, password) VALUES('Ivan', 26, '12345689');
INSERT INTO Usuarios(nombre, edad, password) VALUES('Jesus', 38, '1231523123');
INSERT INTO Usuarios(nombre, edad, password) VALUES('Pepe', 33, '78957897');

SELECT * FROM Usuarios;
SELECT nombre, edad, id FROM Usuarios;
SELECT * FROM Usuarios WHERE edad > 20 ;
SELECT * FROM Usuarios WHERE edad > 20 AND nombre = 'Ivan';

SELECT * FROM Usuarios LIMIT 2;

SELECT * FROM Usuarios ORDER BY edad DESC;

SELECT * FROM Usuarios ORDER BY edad ASC LIMIT 1;

SELECT * FROM Usuarios ORDER BY nombre DESC;

UPDATE Usuarios SET nombre = 'Zaira' WHERE id = 3;

DELETE FROM Usuarios WHERE id = 3;

ALTER TABLE Usuarios ADD COLUMN fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP; // para agregar una columna
ALTER TABLE Usuarios ALTER COLUMN edad TYPE INT; // para cambiar el tipo de una columna
ALTER TABLE Usuarios DROP COLUMN fecha_registro; // para eliminar una columna

DROP TABLE Productos;