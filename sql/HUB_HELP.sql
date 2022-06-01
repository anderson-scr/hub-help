DROP DATABASE IF EXISTS HUB_HELP;

CREATE DATABASE HUB_HELP CHARSET = UTF8 COLLATE = utf8_general_ci;


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
    data_hora DATETIME NOT NULL,
    situacao ENUM('Em aberto', 'Em andamento', 'Concluído', 'Cancelado'),
    fk_categoria TINYINT NOT NULL,
    fk_sala TINYINT NOT NULL,
    fk_colaborador INT NOT NULL,
    imagem VARCHAR(255),
    descricao VARCHAR(255),
    
    CONSTRAINT pk_ocorrencia PRIMARY KEY (id),
    CONSTRAINT fk_ocorrencia_x_categoria FOREIGN KEY fk_categoria REFERENCES Categoria(id),
    CONSTRAINT fk_ocorrencia_x_sala FOREIGN KEY fk_sala REFERENCES Sala(id),
    CONSTRAINT fk_ocorrencia_x_colaborador FOREIGN KEY fk_colaborador REFERENCES Colaborador(id)
);