window.addEventListener("DOMContentLoaded", function () {
  newTime() //prima carica il DOM poi richiama la funzione
})

function newTime() {
  const time = document.getElementById("time")
  let timeAcc = sessionStorage.getItem("contatore") //prendo il counter dalla sessionST(riga 18) in modo
  //che non scappi al refresh

  if (timeAcc) {
    //mi creo la sicurezza di avere un valore numerico in ingresso
    timeAcc = parseInt(timeAcc)
  } else {
    timeAcc = 0
  }
  setInterval(() => {
    //ripeto 1 volta a ogni secondo dalla compilazione del DOM in poi
    timeAcc++
    time.innerText = `${timeAcc}⏱️` //butto nel div questo valore
    sessionStorage.setItem("contatore", timeAcc) // creo il "contatore" all'interno della sessionSt
  }, 1000)
}
