const headerHtml = new Promise((resolve) => { 
  fetch("../../Components/Header/header.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("#header").innerHTML = data
      resolve()
    })
})

fetch("../../Components/Footer/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#footer").innerHTML = data
  })

const barraLateralHTML = new Promise((resolve) => {
  fetch("../../Components/BarraLateral/barraLateral.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#barraLateral").innerHTML = data
    resolve()
  })
})