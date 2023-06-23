const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

const convert = (currency, targetInput, istrue) => {
    currency.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "change.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)
            if (istrue) {
                targetInput.value = (currency.value / response.usd).toFixed(2)
            }else {
                targetInput.value = (currency.value * response.usd).toFixed(2)
            }
            currency.value === '' && (targetInput.value = '')
        }
    }
}

convert(som, usd, true)
convert(usd, som, true)
convert(som, euro, true)
convert(euro, som, true)

