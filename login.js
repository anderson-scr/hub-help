// body = document.querySelector("body")

// function setaModal()
// {
// 	modal = document.querySelector("[data-modal]")
// 	openBtn = document.querySelector("#submit-criar-conta")
// 	console.log(document)
// 	closeBtn = document.querySelector("[data-close-modal]")

// 	openBtn.addEventListener('click', () => {
// 		modal.showModal();
// 		body.style.overflow = 'hidden';
// 	})

// 	closeBtn.addEventListener('click', () => {
// 		modal.close();
// 		body.style.overflow = '';
// 	})
// }


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