import {exemploDados} from "./table_data.js";

function carregarDadosTabela(dados) {
  const tabela = document.querySelector("#dadosTabela")
  let dataHTML = ''

  for(let dado of dados) {
    dataHTML += `<tr>
                  <td>${dado["codigo"]}</td>
                  <td>${dado["tempo"]}</td>
                  <td class="cat">${dado["categoria"]}</td>
                  <td>${dado["situacao"]}</td>
                  <td>${dado["andar"]}</td>
                  <td>${dado["sala"]}</td>
                  <td>${dado["unidade"]}</td>
                  <td>${dado["data"]}</td>
                  <td>${dado["solicitante"]}</td>
                  <td>Mais Detalhes</td>
                 </tr>`
  }
  tabela.innerHTML = dataHTML
}
carregarDadosTabela(exemploDados)