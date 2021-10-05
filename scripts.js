window.addEventListener('DOMContentLoaded', () => {

    console.log(window.location.hostname)

    document.querySelector('#answer').onsubmit = () => {

        document.querySelectorAll('input[name="choice"]').forEach((elem) => {

            if (elem.checked) {

                window.location.replace(`Dillemas/${elem.value}`)

            }

        })

        return false

    }

})