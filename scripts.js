const wrong_scenes = [
    '../Intermediario/cena1d1a.html',
    '../Intermediario/cena1d1c.html',
]


window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#answer').onsubmit = () => {

        document.querySelectorAll('input[name="choice"]').forEach((elem) => {

            if (elem.checked) {

                window.location.href += elem.value

            }

        })

        return false

    }

})