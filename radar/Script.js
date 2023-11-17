function iniciar() {

  setInterval(() => {

    var horario = new Date()
    var horaH = horario.getHours()
    var horaM = horario.getMinutes()
    var horaS = horario.getSeconds()

    console.log(document.getElementById("hora").innerText = `${horaH}:${horaM}:${horaS} `)
  })
}

function checar() {

  const a = Number(document.getElementById("velocidade").value)

  if (a > 80) {
    document.getElementById("velocidadeM").innerText = "velocidade maxima ultrapassada!!!!"
  }
  console.log(document.getElementById("velocidadeA").innerText = `velocidade atual : ${a} Km/h`)
}

function limpar() {

  document.getElementById("velocidade").value = ""
  console.log(document.getElementById("velocidadeA").innerText = `velocidade atual :`)
  console.log(document.getElementById("velocidadeM").innerText = ``)

}