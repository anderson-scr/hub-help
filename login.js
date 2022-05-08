
// implementação

// ..:: Para conhecimento ::..

// Local: Nome do Sistema - Módulo e Menu relacionado

// Funcionalidade: informar qual a funcionalidade da implementação
// Texto Adicional: pode ser informado qualquer coisa referente à implementação

// SENDO nós identificamos o perfil do usuário que vai usar a funcionalidade
// POSSO a funcionalidade em si que precisa ser desenvolvida
// PARA QUE a motivação da funcionalidade, incluindo o valor de negócio.

// Cenário 1 - Nome do Cenário
// Dado que para indicar o cenário atual
// Quando para indicar a ação do usuário
// Então para indicar como o software vai reagir
// E/OU para criar cenários de teste ainda mais ricos.


// Critérios de Aceitação


// Bugs

// ..:: Para conhecimento ::..


// LOCAL: Nome do Sistema - Módulo e Menu relacionado

// VERSÃO: Identificar em que versão do sistema envolvido o problema pode ser repetido. Importante identificar se o problema pode ser repetido na última versão.

// PRÉ-CONDIÇÕES:
// • Identifique o que deve estar configurado no ambiente para
// que o problema possa ser repetido;
// • Pode ser uma lista de configurações a serem marcadas;
// • Ou simplesmente a indicação de que uma base de dados específica
// deve ser usada.

// PASSOS PARA REPRODUÇÃO DO ERRO:
// 1) Monte uma lista indicando os passos que devem ser realizados
// para repetir o erro;
// 2) Você pode ser específico e identificar o que deve ser preenchido
// em cada campo;
// 3) Principalmente se uma base de dados específica está sendo usada
// para trabalhar;
// 4) Deve ser possível para qualquer pessoa repetir o erro lendo esta
// lista de passos.

// ERRO: Mostrar o erro que está acontecendo. Pode ser com uma identificação do que está acontecendo de errado - e muito importante: mostrar contexto de negócio identificando porque a situação atual é um erro.

// SITUAÇÃO DESEJADA: Descreva a situação que o sistema vai mostrar, identifique configurações que não estão sendo consideradas, mostre o que deve ser modificado pensando em regras de negócio para resolver a situação.


// Critérios de Aceitação




//------------------------------------------------------------------------------------------------------//





// ..:: Para conhecimento ::..

// Local: GESCON > Login

// Funcionalidade: tela de login para acesso ao sistema
// Texto Adicional: a tela deve conter as logos do GESCON e da Nota Control, campos para a entrada do CPF e senha, um botão de entrar e um link para redefinir a senha.

// SENDO contribuintes e funcionários da prefeitura
// POSSO acessar a tela de login
// PARA QUE possam abrir ou gerenciar os processos abertos dentro do sistema

// Cenário 1 – Sucesso
// Dado que o usuário inseriu seu CPF e senha corretamente nos respectivos campos
// Quando clicar no botão entrar 
// Então deverá ser redirecionado a página principal (dashboard)

// Cenário 2 – Falha CPF
// Dado que o usuário inseriu seu CPF incorretamente no respectivo campo
// Quando terminar de escrever
// Então o campo deverá ser limpo, sua borda deverá assumir a cor vermelha e sua borda deverá ser aumentada para 2px

// Cenário 3 – Falha Senha
// Dado que o usuário inseriu sua senha incorretamente no respectivo campo
// Quando clicar no botão entrar
// Então uma snackbar deverá aparecer com fundo em tom mais claro de vermelho sinalizando o erro, sua borda deverá assumir a cor vermelha e sua borda deverá ser aumentada para 2px

// Critérios de Aceitação:

// 1 – O campo CPF deverá possuir mascara para facilitar a leitura
// 2 – O campo CPF deverá validar o texto inserido e limitar a 11 caracteres
// 3 – O campo senha não deve mostrar os caracteres digitados e limitar a 20 caracteres
// 4 – O layout deverá seguir o modelo abaixo




// ..:: Para conhecimento ::..


// LOCAL: aplicativo Mercadinho Me Contrata > Sacola

// VERSÃO: 0.1

// PRÉ-CONDIÇÕES:
// • ter feito o login;
// • ter adicionado um ou mais produtos à sua sacola;

// PASSOS PARA REPRODUÇÃO DO ERRO:
// 1) clique em sacola no menu de opções;
// 2) clique em pagar;

// ERRO: o modal de aviso informa que o produto foi adicionado ao carrinho com sucesso e o usuário não é redirecionado para a página principal.

// SITUAÇÃO DESEJADA: o modal deve informar que a compra foi realizada com sucesso e o usuário é redirecionado para a página principal

body = document.querySelector("body")

function setaModal()
{
	modal = document.querySelector("[data-modal]")
	openBtn = document.querySelector("#submit-criar-conta")
	console.log(document)
	closeBtn = document.querySelector("[data-close-modal]")

	openBtn.addEventListener('click', () => {
		modal.showModal();
		body.style.overflow = 'hidden';
	})

	closeBtn.addEventListener('click', () => {
		modal.close();
		body.style.overflow = '';
	})
}


function trocaAba()
{
	atual = document.querySelector("[data-op-atual]");
	console.log(atual.parentElement.parentElement)
	
	prox = atual.nextElementSibling;
	if(prox == null)
		prox = atual.previousElementSibling;
	
	if(prox.id === 'login')
	{
		fetch("login.html")
		.then(response => {
			return response.text()
		})
		.then(data => {
			console.log(atual.parentElement.parentElement)
			atual.parentElement.parentElement.style.height = "45%";
			atual.parentElement.parentElement.style.borderRadius = "5%";
			atual.parentElement.parentElement.innerHTML = data;
		});
	}
	else if(prox.id === 'criar-conta')
	{
		fetch("criar_conta.html")
		.then(response => {
			return response.text()
		})
		.then(data => {
			console.log(atual.parentElement.parentElement)
			atual.parentElement.parentElement.style.height = "55%";
			atual.parentElement.parentElement.style.borderRadius = "4.8%";
			atual.parentElement.parentElement.innerHTML = data;
			setaModal();
		});

	}
}

function esqueciSenha()
{
	main = document.querySelector("main");
	fetch("esqueci_senha.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		main.innerHTML = data;
	});
}

function enviaSenha()
{
	main = document.querySelector("main");
	fetch("login.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		main.innerHTML = data;
	});
}

function alterarSenha()
{
	main = document.querySelector("main")
	fetch("alterar_senha.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		main.innerHTML = data;
	});
}