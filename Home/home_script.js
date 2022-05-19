let openClose = false
const containnerMenu = document.querySelector(".containnerMenu")
const btnMenu = document.querySelector(".iconeMenu")
const menuOpcoes = document.querySelector("#menuOpcoes")
const header = document.querySelector("#header")


containnerMenu.addEventListener("click", () => {
  if(!openClose) {
    containnerMenu.classList.add("open")
    menuOpcoes.style.width = "130px"
    menuOpcoes.style.gap = "20px"
    menuOpcoes.style.opacity = "1"
  } else {
    containnerMenu.classList.remove("open")
    menuOpcoes.style.width = "0px"
    menuOpcoes.style.gap = "0px"
    menuOpcoes.style.opacity = "0"
  }
  openClose = !openClose
})


function alternaPagina(evt)
{
	// evt.preventDefault()
  if(evt.target.id === 'relatorios')
	{
    window.location.href = "../Home/relatorios.html"
  }
  else if(evt.target.id === 'home')
  {
    window.location.href = "../Home/home.html"
  }
  else if(evt.target.id === 'logout')
  {
    window.location.href = "../index.html"
  }
}
