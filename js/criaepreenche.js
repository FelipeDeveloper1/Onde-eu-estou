const countries_place = document.querySelector('.countries-content')

showcountry = async(value) => {
    try {
        console.log(value)
        const getCountry = await fetch(`https://restcountries.com/v3.1/region/${value}`)
        const setcoutry = await getCountry.json()
        setcoutry.forEach(element => {
            // criando as tags 
            const country = document.createElement("div")
            const imgcountry = document.createElement('img')
            const info_country = document.createElement('div')
            const pais_nome = document.createElement('h1')
            const population = document.createElement('p')

            // inserindo no conteudo
            country.insertAdjacentElement('afterbegin', imgcountry)
            info_country.insertAdjacentElement('afterbegin', country)
            countries_place.insertAdjacentElement('afterbegin', info_country)
            info_country.insertAdjacentElement('beforeend', pais_nome)


            // inserindo valores da API nas tags criadas
            imgcountry.src = `${element.flags.svg}`
            info_country.classList.add('info_country')
            pais_nome.innerText = `${element.name.common}`
                // countries_place.style.display = 'grid'
                // main_content.style.display = 'none'



        });
    } catch {
        console.log("Deu erro")
    }
}