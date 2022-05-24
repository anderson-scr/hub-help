import {exemploDados} from "../Data/dataExemplo.js";

// Adiciona o marcado de pagina no header depois de carregado.
headerHtml.then(() => {
  document.querySelector("#ocorrencias").style.borderBottom = "2px solid #1669AC"
})


class Tabela {
  constructor(infoTabela) {
    this.infoTabela = infoTabela
    this.iconSvgs = {
      1:`<img src="../img/icones_svg_tabela/arCondicionado.svg" alt="Ar Condicionado">`,
      2:`<img src="../img/icones_svg_tabela/computadores.svg" alt="Computadores">`,
      3:`<img src="../img/icones_svg_tabela/eletrica.svg" alt="Eletrica">`,
      4:`<img src="../img/icones_svg_tabela/estrutural.svg" alt="Estrutural">`,
      5:`<img src="../img/icones_svg_tabela/hidraulica.svg" alt="Hidraulica">`,
      6:`<img src="../img/icones_svg_tabela/limpeza.svg" alt="Limpeza">`
    }
    this.situacoes = {
      1: `<div class="situacoes" style="background-color: #3385C3">Em andamento</div>`,
      2: `<div class="situacoes" style="background-color: #DAAE14">Em aberto</div>`,
      3: `<div class="situacoes" style="background-color: #35BD05">Concluido</div>`,
      4: `<div class="situacoes" style="background-color: #E9250B">Cancelado</div>`
    }

    // Funcao inicializadora
    this.carregaInfoTabela()
  }

  carregaInfoTabela() {
    const tabela = document.querySelector("#dadosTabela")
    let dataHTML = ''

    for(let dado of this.infoTabela) {
      dataHTML += `<tr>
                    <td>${dado["codigo"]}</td>
                    <td>${dado["tempo"]}</td>
                    <td class="centralizar">${this.iconSvgs[dado["categoria"]]}</td>
                    <td class="centralizar">${this.situacoes[dado["situacao"]]}</td>
                    <td>${dado["andar"]}</td>
                    <td>${dado["sala"]}</td>
                    <td>${dado["unidade"]}</td>
                    <td>${dado["data"]}</td>
                    <td>${dado["solicitante"]}</td>
                    <td class="maisDetalhes centralizar">Mais Detalhes</td>
                   </tr>`
    }
    tabela.innerHTML = dataHTML 
  }
}

new Tabela(exemploDados)