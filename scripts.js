window.addEventListener('DOMContentLoaded', () => {

    const url = (window.location.host)

    console.log(url)

    document.querySelector('#answer').onsubmit = () => {

        document.querySelectorAll('input[name="choice"]').forEach((elem) => {

            if (elem.checked) {

                // if ('github' in url) {
                    
                // } else {
                    
                // }

                window.location.replace(`${elem.value}`)

                // switch ('github' in url) {
                //     case true:
                //         window.location.replace(`${url}/Dillemas/${elem.value}`)
                //         break;
                
                //     case false:
                //         window.location.replace(`${elem.value}`)
                //         break;
                // }

            }

        })

        return false

    }

})