'1) Selecionar todas as linhas das tabelas BANCOS, com os nomes dos bancos em ordem alfabética.
Para os bancos com nomes repetidos, ordenar a agência em ordem crescente.'
	SELECT* FROM BANCOS ORDER BY NM_BANCO, NU_AGENCIA

'2) Selecionar os bancos que não tem nenhum funcionário vinculado'
	SELECT NM_BANCO FROM BANCOS B JOIN FUNCIONARIOS F ON B.CD_BANCO = F.CD_BANCO
	WHERE F.CD_BANCO IS NULL

'3) Selecionar os bancos com o numero do banco seja nulo ou o primeiro dígito número do
seja igual a 1.'
	SELECT NM_BANCO FROM BANCOS WHERE NU_BANCO IS NULL OR NU_BANCO LIKE '1%'

'4) Selecionar os funcionários que ganham R$ 200,00 ou menos que nasceram depois depois de 1974'
	SELECT NM_FUNCIONARIO FROM FUNCIONARIOS 
	WHERE SALARIO <= 200.00 AND YEAR(DT_NASCIMENTO) > 1974

'5) Selecionar os funcionários que foram contratado no mes 2'
	SELECT NM_FUNCIONARIO FROM FUNCIONARIOS WHERE MONTH(DT_ADMISSAO) = 2

'6) Mostrar o nome do funcionario, data de nascimento, idade, data de admissao e tempo de serviço'
	SELECT NM_FUNCIONARIO, DT_NASCIMENTO, 
		DATEDIFF(yy, DT_NASCIMENTO, CONVERT(date, GETDATE())) AS IDADE, DT_ADMISSAO,
		DATEDIFF(yy, DT_NASCIMENTO, CONVERT(date, GETDATE())) AS [TEMPO SERVIÇO] FROM FUNCIONARIOS;

'6.1) Mostrar o nome do funcionario, data de nascimento, idade, data de admissao
e tempo de serviço em anos, meses e dias'
	SELECT CD_FUNCIONARIO, NM_FUNCIONARIO, DT_NASCIMENTO,
		DATEDIFF(yy, DT_NASCIMENTO, CONVERT(date, GETDATE())) AS IDADE, DT_ADMISSAO,
		CONCAT(YEAR(DATEADD(dd, DATEDIFF(dd, DT_NASCIMENTO, CONVERT(date, GETDATE())), '1900-01-01')) - 1900, ' ano(s) ', MONTH(DATEADD(dd, DATEDIFF(dd, DT_NASCIMENTO, CONVERT(date, GETDATE())), '1900-01-01')) - 1, ' mes(es) ', DAY(DATEADD(dd, DATEDIFF(dd, DT_NASCIMENTO, CONVERT(date, GETDATE())), '1900-01-01')) - 1, ' dia(s)')
		AS [TEMPO SERVIÇO] FROM FUNCIONARIOS;

'7) Selecionar os fucionários que tem conta em banco, mas não estão vinculados em
nenhum departamento'
	SELECT * FROM FUNCIONARIOS F WHERE F.CD_BANCO IS NOT NULL AND F.CD_DEPARTAMENTO IS NULL

'8) Mostrar uma tabela com nome do funcionário, nome do departamento e nome do banco,
para todos os funcionários que estão em algum departamento. Se o funcionário não tiver
conta em nenhum banco, exibir a mensagem "Conta inexistente"'
	SELECT F.NM_FUNCIONARIO, D.NM_DEPARTAMENTO, ISNULL(B.NM_BANCO, 'Conta Inexistente') AS NM_BANCO FROM FUNCIONARIOS F LEFT JOIN
		DEPARTAMENTOS D ON F.CD_DEPARTAMENTO = D.CD_DEPARTAMENTO LEFT JOIN
		BANCOS B ON F.CD_BANCO = B.CD_BANCO WHERE F.CD_DEPARTAMENTO IS NOT NULL

'9) Selecionar os funcionários que
tenham conta no banco do brasil e trabalhem no departamento de desenvolvimento ou
que trabalhem no departamento de recursos humanos e não tenham conta em nenhum banco,
mostrando o nome do funcionário, o departamento e o banco'
	SELECT F.NM_FUNCIONARIO, D.NM_DEPARTAMENTO, B.NM_BANCO FROM FUNCIONARIOS F
		LEFT JOIN BANCOS B ON F.CD_BANCO = B.CD_BANCO
		LEFT JOIN DEPARTAMENTOS D ON D.CD_DEPARTAMENTO = F.CD_DEPARTAMENTO WHERE 
		NM_BANCO = 'Banco do Brasil' AND NM_DEPARTAMENTO = 'Desenvolvimento'
			OR
		NM_DEPARTAMENTO = 'Recursos Humanos' AND NM_BANCO IS NULL

'10) Selecionar todos os funcionários, mostrando o nome do funcionário, a data de admissão,
Salário atual, uma mensagem nas seguintes condições:
1 - Se foram admitidos antes do ano 2000. Mensagem: "Senior"
2 - Se foi admitido entre o ano 2000 e 2014. Mensagem: "Pleno"
3 - Se foi admitido depois de 2014. Mensagem: "Novato"
e uma coluna chamada "Salário Previsto"
com o aumento de 10% para os funcionários novatos com conta no bradesco da agencia 500-4
e aumento de 15% para os funcionários plenos que tiverem conta na caixa econômica Federal.' 
	SELECT F.NM_FUNCIONARIO, F.DT_ADMISSAO, F.SALARIO, 
		CASE 
			WHEN YEAR(F.DT_ADMISSAO) < 2000 THEN 'Senior'
			WHEN YEAR(F.DT_ADMISSAO) BETWEEN 2000 AND 2014 THEN 'Pleno'
			WHEN YEAR(F.DT_ADMISSAO) > 2014 THEN 'Novato'
		END AS TIPO,
		CASE
			WHEN YEAR(F.DT_ADMISSAO) > 2014 AND NM_BANCO = 'Bradesco' AND NU_AGENCIA = 5004 THEN CAST(SALARIO *1.1235 AS SMALLMONEY)
			WHEN YEAR(F.DT_ADMISSAO) BETWEEN 2000 AND 2014 AND NM_BANCO = 'Caixa Econômica Federal' THEN CAST(SALARIO *1.15 AS SMALLMONEY)
			ELSE SALARIO
		END
		AS [Salário Previsto]
	FROM FUNCIONARIOS F JOIN BANCOS B ON F.CD_BANCO = B.CD_BANCO

'11) Fazer um relatório que para cada departamento mostre o nome do departamento e a quantidade
de pessoas que foram admitidos antes do ano 2000, entre o ano 2000 e 2014 e depois de 2014.'
	SELECT D.NM_DEPARTAMENTO, QTD_SENIOR = (SUM(IIF(YEAR(F.DT_ADMISSAO) < 2000, 1, 0))),
		QTD_PLENO = (SUM(IIF(YEAR(F.DT_ADMISSAO) BETWEEN 2000 AND 2014, 1, 0))),
		QTD_NOVATO = (SUM(IIF(YEAR(F.DT_ADMISSAO) < 2014, 1, 0)))
	FROM FUNCIONARIOS F JOIN DEPARTAMENTOS D ON F.CD_DEPARTAMENTO = D.CD_DEPARTAMENTO
	GROUP BY D.NM_DEPARTAMENTO

	-- OU --

	SELECT NM_DEPARTAMENTO, QTD_SENIOR = (SELECT COUNT(*) FROM FUNCIONARIOS WHERE YEAR(DT_ADMISSAO) < 2000 AND CD_DEPARTAMENTO = D.CD_DEPARTAMENTO),
		QTD_PLENO = (SELECT COUNT(*) FROM FUNCIONARIOS WHERE YEAR(DT_ADMISSAO) BETWEEN 2000 AND 2014  AND CD_DEPARTAMENTO = D.CD_DEPARTAMENTO ),
		QTD_NOVATO = (SELECT COUNT(*) FROM FUNCIONARIOS WHERE YEAR(DT_ADMISSAO) > 2014  AND CD_DEPARTAMENTO = D.CD_DEPARTAMENTO)
	FROM DEPARTAMENTOS D ORDER BY NM_DEPARTAMENTO