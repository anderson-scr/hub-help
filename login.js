function openModal()
{
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