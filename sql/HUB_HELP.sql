DROP DATABASE IF EXISTS HUB_HELP;

CREATE DATABASE HUB_HELP CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
USE HUB_HELP;

CREATE TABLE Colaborador
(
	id INT UNSIGNED AUTO_INCREMENT NOT NULL,
	nome VARCHAR(50) NOT NULL,
	sobrenome VARCHAR(50) NOT NULL,    
	email VARCHAR(100) UNIQUE NOT NULL,
	senha VARCHAR(100) NOT NULL,
	privilegio BOOLEAN DEFAULT 0,
	inativo BOOLEAN DEFAULT 0,
	
	CONSTRAINT pk_login PRIMARY KEY (id)
);

CREATE TABLE Categoria
(
	id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
	nome VARCHAR(30) UNIQUE NOT NULL,
	inativo BOOLEAN DEFAULT 0,

	CONSTRAINT pk_categoria PRIMARY KEY (id)
);

CREATE TABLE Sala
(
	id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
	nome VARCHAR(50) NOT NULL,
	andar TINYINT UNSIGNED NOT NULL,
	unidade VARCHAR(100),
	inativo BOOLEAN DEFAULT 0,
	
	CONSTRAINT pk_sala PRIMARY KEY (id)
);

CREATE TABLE Ocorrencia
(
	id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
	data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	situacao ENUM("Em aberto", "Em andamento", "Concluído", "Cancelado"),
	fk_categoria TINYINT UNSIGNED NOT NULL,
	fk_sala TINYINT UNSIGNED NOT NULL,
	fk_colaborador INT UNSIGNED NOT NULL,
	imagem VARCHAR(255),
	descricao VARCHAR(255),
	
	CONSTRAINT pk_ocorrencia PRIMARY KEY (id),
	CONSTRAINT fk_ocorrencia_x_categoria FOREIGN KEY (fk_categoria) REFERENCES Categoria(id) ON UPDATE CASCADE,
	CONSTRAINT fk_ocorrencia_x_sala FOREIGN KEY (fk_sala) REFERENCES Sala(id) ON UPDATE CASCADE,
	CONSTRAINT fk_ocorrencia_x_colaborador FOREIGN KEY (fk_colaborador) REFERENCES Colaborador(id) ON UPDATE CASCADE
);

CREATE TABLE Notificacao
(
	id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
	data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	fk_colaborador INT UNSIGNED NOT NULL,
	mensagem VARCHAR(255) NOT NULL,
	
	CONSTRAINT pk_notificacao PRIMARY KEY (id),
	CONSTRAINT fk_notificacao_x_colaborador FOREIGN KEY (fk_colaborador) REFERENCES Colaborador(id) ON UPDATE CASCADE 
);

CREATE TABLE Auditoria
(
	id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
	data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	tabela VARCHAR(30) NOT NULL,
	coluna VARCHAR(30) NOT NULL,
	antes VARCHAR(255) NOT NULL,
	depois VARCHAR(255) NOT NULL,
	fk_colaborador INT UNSIGNED NOT NULL,

	CONSTRAINT pk_auditoria PRIMARY KEY (id),
	CONSTRAINT fk_auditoria_x_colaborador FOREIGN KEY (fk_colaborador) REFERENCES Colaborador(id) ON UPDATE CASCADE
);
