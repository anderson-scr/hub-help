let openClose = false
const containnerMenu = document.querySelector(".containnerMenu")
const menuOpcoes = document.querySelector("#menuOpcoes")
const header = document.querySelector("#header")
const menuEsquerda = document.querySelector("#menuEsquerda")



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
  menuOpcoes.style.width = "130px"
  menuOpcoes.style.gap = "20px"
  menuOpcoes.style.opacity = "1"
}

function closeMenu() {
  containnerMenu.classList.remove("open")
  menuOpcoes.style.width = "0px"
  menuOpcoes.style.gap = "0px"
  menuOpcoes.style.opacity = "0"
}