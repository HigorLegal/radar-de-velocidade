//hora atual
function iniciar() {

  setInterval(() => {

    var horario = new Date()
    var horaH = horario.getHours()
    var horaM = horario.getMinutes()
    var horaS = horario.getSeconds()

    console.log(document.getElementById("hora").innerText = `${horaH}:${horaM}:${horaS} `)
  })
}
 //chegar a velocidade
function checar() {

  const a = Number(document.getElementById("velocidade").value)

  if (a > 80) {
    document.getElementById("velocidadeM").innerText = "velocidade maxima ultrapassada!!!!"
    document.getElementById("velocidadeM").style.color="red"
    console.log(document.getElementById("velocidadeA").innerText = ``)
  }else
  console.log(document.getElementById("velocidadeA").innerText = `velocidade maxima nao ultrapassada`)
  document.getElementById("velocidadeA").style.color="green"
}
//limpar 
function limpar() {
  document.getElementById("velocidade").value = ""
  console.log(document.getElementById("velocidadeA").innerText = `limite de velocidade : 80km/h`)
  console.log(document.getElementById("velocidadeM").innerText = ``)
  document.getElementById("velocidadeA").style.color="black"

}