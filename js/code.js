const allImages = document.querySelectorAll('.img-country')
const option = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}


const mapear = (value) => {
    getRandomInt = (max = value.length, min = 0) => {
        let num = Math.random() * max - min
        return Math.floor(num)
    }
    document.querySelector('#primeiro').src = value[getRandomInt()].flags.svg
    console.log(value[getRandomInt()].flags.svg)


}
showcountry = async(value) => {
    try {
        const fetchcountry = await fetch(`https://restcountries.com/v3.1/all`, option)
        const country = await fetchcountry.json()
        mapear(country)

    } catch {
        console.log('deu erro')
    }
}
showcountry()