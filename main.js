const dataAtual = new Date();
let dataObjetiva = prompt('data final...exemplo:xxxx-xx-xx')
 dataObjetiva = new Date(dataObjetiva)
let diasRestantes = Math.floor((dataObjetiva-dataAtual)/86400000)
document.querySelector('#dias_restantes').textContent = diasRestantes