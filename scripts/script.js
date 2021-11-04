var togle = document.querySelector('.togle')

togle.addEventListener("click", () => {
   document.querySelector('.container').classList.toggle('show-menu')
})

document.querySelector("#qtd").addEventListener("change",valor)
document.querySelector("#js").addEventListener("change", valor)
document.querySelector("#layout-sim").addEventListener("change", valor)
document.querySelector("#layout-nao").addEventListener("change", valor)
document.querySelector("#prazo").addEventListener("change", function () {
   const prazo = document.querySelector("#prazo").value
   document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
   if (prazo == 1) {
       document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`
   }
   valor()
})

function valor() {
   const qtd = document.querySelector("#qtd").value
   const precisoJS = document.querySelector("#js").checked
   const addLayout = document.querySelector("#layout-sim").checked
   const prazo = document.querySelector("#prazo").value
   prazo.innerHTML
   let preco = (qtd*150)
   if (precisoJS) preco*=1.1
   if (addLayout) preco += 500
   let taxaUrgencia = 1 - prazo * 0.1
   preco = preco +preco*taxaUrgencia
   document.querySelector("#preco").innerHTML = `R$${preco.toFixed(2)}`
}
