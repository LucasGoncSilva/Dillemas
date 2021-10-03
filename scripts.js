function fetching(url) {

    fetch(url)
        .then(response => response.text())
        .then(response => document.querySelector('#content').innerHTML = response)

}


window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#answer').onsubmit = () => {

        document.querySelectorAll('input[name="choice"]').forEach((elem) => {

            if (elem.checked) { fetching(elem.value) }

        })

        return false

    }

})