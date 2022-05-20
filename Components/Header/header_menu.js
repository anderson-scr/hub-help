headerHtml.then(() => {
  let openClose = false
  const containnerMenu = document.querySelector(".containnerMenu")
  const menuOpcoes = document.querySelector("#menuOpcoes")
  const header = document.querySelector("#header")
  const menuEsquerda = document.querySelector("#menuEsquerda")
  
  // Animacao do menu do header
  containnerMenu.addEventListener("click", () => {
    openClose? closeMenu() : openMenu()
    openClose = !openClose
  })
  
  window.addEventListener('mouseup', function(evt) {
    if (!header.contains(evt.target) && !menuEsquerda.contains(evt.target) && !containnerMenu.contains(evt.target)){
      closeMenu()
      openClose = false
    } 
  });
  
  function openMenu() {
    containnerMenu.classList.add("open")
    menuOpcoes.style.width = "180px"
    menuOpcoes.style.gap = "20px"
    menuOpcoes.style.opacity = "1"
  }
  
  function closeMenu() {
    containnerMenu.classList.remove("open")
    menuOpcoes.style.width = "0px"
    menuOpcoes.style.gap = "0px"
    menuOpcoes.style.opacity = "0"
  }

  // Funcao para trocar de pagina
  const botoesNavegacao = document.querySelectorAll(".opcoesMenu")
  for(botao of botoesNavegacao) {
    botao.addEventListener("click", (evt) => {

      if(evt.target.id === 'relatorios') {
        window.location.href = "../../Relatorios/relatorios.html"
      }
      else if(evt.target.id === 'home') {
        window.location.href = "../../Home/home.html"
      }
      else if(evt.target.id === 'logout') {
        window.location.href = "../../index.html"
      }
      else if(evt.target.id === 'ocorrencias') {
        window.location.href = "../../Ocorrencias/ocorrencias.html"
      }
    })
  }
})