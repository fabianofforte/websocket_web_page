//const socket = new WebSocket("wss://contador-de-pessoas.herokuapp.com/");
 let socket = new WebSocket("ws://192.168.15.10:4000");

document.addEventListener("DOMContentLoaded", () => {
    let temp = document.getElementById("temp")
    let umid = document.getElementById("umidade")
    let data = document.getElementById("data")
    let qtdPessoas = document.getElementById("contador")


    socket.onmessage = event => {
        const dados = event.data.split(",")
        
        temp.innerHTML = dados[0] + " °C"
        umid.innerHTML = dados[1]
        data.innerHTML = dados[2]
        qtdPessoas.innerHTML = dados[3]
    }
})