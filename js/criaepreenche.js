const { text } = require("express");

const countries_place = document.querySelector('.countries-content')
const showcountry = async(value) => {
    try {
        const getCountry = await fetch(`https://restcountries.com/v3.1/region/europe`)
        const setcoutry = await getCountry.json()
        setcoutry.forEach(element => {
            const country = document.createElement("img")
            country.src = `${element.flags.svg}`
            console.log(country.src)
            countries_place.insertAdjacentElement('afterbegin', country)


        });
    } catch {
        console.log("Deu erro")
    }
}


console.log(countries_place)
showcountry()