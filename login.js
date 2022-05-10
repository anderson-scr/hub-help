function openModal(el, ev)
{
	img = document.querySelector('#img-modal');
	titulo = document.querySelector('#titulo-modal');
	texto = document.querySelector('#texto-modal');

	if(el.id === 'login')
	{
		img.src = "img/check_circle_black_48dp.svg";
		img.alt = "simbolo de sucesso"
		titulo.innerHTML = "Conta criada com sucesso!";		
	}
	else if(el.id === 'enviar-email')
	{
		img.src = "img/check_circle_black_48dp.svg";
		img.alt = "simbolo de sucesso"
		titulo.innerHTML = "Senha enviada com sucesso!";
		console.log(`Uma senha temporária foi enviada para o e-mail ${el.previousElementSibling.value}`);
		texto.innerHTML = `Uma senha temporária foi enviada para o e-mail ${el.previousElementSibling.value}`;
	}
	else if(el.id === 'alterar-senha')
	{
		img.src = "img/check_circle_black_48dp.svg";
		img.alt = "simbolo de sucesso"
		titulo.innerHTML = "A alteração de senha foi realizada com sucesso!";
	}

	btn = document.querySelector(".modal-bg")
	btn.style.visibility = 'visible';
	btn.style.opacity = '1';
}

function closeModal()
{
	btn = document.querySelector(".modal-bg")
	btn.style.visibility = 'hidden';
	btn.style.opacity = '0';
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
			// setaModal();
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