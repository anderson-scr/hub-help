DROP DATABASE IF EXISTS HUB_HELP;

CREATE DATABASE HUB_HELP CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
USE HUB_HELP;

CREATE TABLE IF NOT EXISTS Colaborador
(
	id INT AUTO_INCREMENT NOT NULL,
	nome VARCHAR(50) NOT NULL,
	sobrenome VARCHAR(50) NOT NULL,    
	login VARCHAR(100) UNIQUE NOT NULL,
	senha VARCHAR(100) NOT NULL,
	privilegio BOOLEAN DEFAULT 0,
	ativo BOOLEAN DEFAULT 0,
	
	CONSTRAINT pk_login PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Categoria
(
	id TINYINT AUTO_INCREMENT NOT NULL,
	nome VARCHAR(30) NOT NULL,
	
	CONSTRAINT pk_categoria PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Sala
(
	id TINYINT AUTO_INCREMENT NOT NULL,
	nome VARCHAR(30) NOT NULL,
	andar TINYINT NOT NULL,
	unidade VARCHAR(30),    
	
	CONSTRAINT pk_sala PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Ocorrencia
(
	id BIGINT AUTO_INCREMENT NOT NULL,
	data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	situacao ENUM('Em aberto', 'Em andamento', 'Concluído', 'Cancelado'),
	fk_categoria TINYINT NOT NULL,
	fk_sala TINYINT NOT NULL,
	fk_colaborador INT NOT NULL,
	imagem VARCHAR(255),
	descricao VARCHAR(255),
	
	CONSTRAINT pk_ocorrencia PRIMARY KEY (id),
	CONSTRAINT fk_ocorrencia_x_categoria FOREIGN KEY (fk_categoria) REFERENCES Categoria(id) ON UPDATE CASCADE ON DELETE NO ACTION,
	CONSTRAINT fk_ocorrencia_x_sala FOREIGN KEY (fk_sala) REFERENCES Sala(id) ON UPDATE CASCADE ON DELETE NO ACTION,
	CONSTRAINT fk_ocorrencia_x_colaborador FOREIGN KEY (fk_colaborador) REFERENCES Colaborador(id) ON UPDATE CASCADE ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS Notificacao
(
	id BIGINT AUTO_INCREMENT NOT NULL,
	data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	fk_colaborador INT NOT NULL,
	mensagem VARCHAR(255) NOT NULL,
	
	CONSTRAINT pk_notificacao PRIMARY KEY (id),
	CONSTRAINT fk_notificacao_x_colaborador FOREIGN KEY (fk_colaborador) REFERENCES Colaborador(id) ON UPDATE CASCADE ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS Auditoria
(
	id BIGINT AUTO_INCREMENT NOT NULL,
	data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	fk_colaborador INT NOT NULL,
	acao VARCHAR(255) NOT NULL,
	
	CONSTRAINT pk_auditoria PRIMARY KEY (id),
	CONSTRAINT fk_auditoria_x_colaborador FOREIGN KEY (fk_colaborador) REFERENCES Colaborador(id) ON UPDATE NO ACTION ON DELETE NO ACTION
);
