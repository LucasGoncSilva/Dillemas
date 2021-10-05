window.addEventListener('DOMContentLoaded', () => {

    const url = (window.location.host)

    document.querySelector('#answer').onsubmit = () => {

        document.querySelectorAll('input[name="choice"]').forEach((elem) => {

            if (elem.checked) {

                switch (url.includes('github')) {
                    case true:
                        window.location.pathname = `/Dillemas/${elem.value}`
                        break;
                
                    case false:
                        window.location.replace(`${elem.value}`)
                        break;
                }

            }

        })

        return false

    }

})