window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#confirm').onclick = () => {

        fetch('/Inicial/INSTRUCOES.txt')
        .then(response => response.text())
        .then(response => document.querySelector('#content').innerHTML = response)

    }

})