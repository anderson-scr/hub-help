const numeroMatricula = document.querySelector("#matricula")
const senha = document.querySelector("#senha")

function openModal(el, mensagemErro)
{
	img = document.querySelector('#img-modal');
	titulo = document.querySelector('#titulo-modal');
	texto = document.querySelector('#texto-modal');

  if(el.id === 'login')
	{
    img.src = "img/check_circle_blue_48dp.svg";
		img.alt = "simbolo de sucesso"
		
    numeroMatricula.value = ''
    senha.value = ''
    titulo.innerHTML = mensagemErro;
	}
	else if(el.id === 'enviar-email')
	{
		img.src = "img/check_circle_blue_48dp.svg";
		img.alt = "simbolo de sucesso"
		titulo.innerText = "Senha enviada com sucesso!";
		texto.innerText = `Uma senha temporária foi enviada para o e-mail ${el.previousElementSibling.value}`;
	}
	else if(el.id === 'alterar-senha')
	{
		img.src = "img/check_circle_blue_48dp.svg";
		img.alt = "simbolo de sucesso"
		titulo.innerText = "A alteração de senha foi realizada com sucesso!";
	}
	else if(el.id === 'confirmar-saida')
	{
		img.src = "img/help_blue_48dp.svg";
		img.alt = "simbolo de duvida"
		titulo.innerText = "Você tem certeza que gostaria de sair?";
		
		document.querySelector(".div-botoes").innerHTML = '<button type="button" onclick="closeModal()">Voltar</button><button type="button" class="success" onclick="closeModal()">Sair</button>'
	}
	
	modal = document.querySelector(".modal-bg")
	modal.style.visibility = 'visible';
	modal.style.opacity = '1';
}

function closeModal()
{
	modal = document.querySelector(".modal-bg")
	modal.style.visibility = 'hidden';
	modal.style.opacity = '0';
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

function enviaSenha(e)
{
	openModal(e);
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

// Rato por aqui
const resultadoForm = document.querySelector("#form")


function verificarEntrada(evt) {
  evt.preventDefault()

  // Verifica entrada do usuario
  if(numeroMatricula.value === '' || senha.value === '') {
    openModal(evt.target, "Preencha todos os campos.")

  } else if (numeroMatricula.value !== '123' || senha.value !== '123') {
    openModal(evt.target, "Login ou senha invalido.")
    
  } else {
    console.log("entrei")
    window.location.href = "../Home/home.html"
  }
}