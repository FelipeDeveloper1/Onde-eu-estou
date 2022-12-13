//contents 
const main_content = document.querySelector('.main-content')
const searched_content = document.querySelector('.country-searched')


//mapeando as divs iniciais da aplicação
const allImages = document.querySelectorAll('.img-country>img')
const allNomes = document.querySelectorAll('.nome')
const allCapitais = document.querySelectorAll('.capital')
const allPopulation = document.querySelectorAll('.population')
const allRegiao = document.querySelectorAll('.regiao')

const option = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

//preenchendo as divs mapeadas
const mapear = (value) => {
    getRandomInt = (max = value.length, min = 0) => {
        let num = Math.random() * max - min
        return Math.floor(num)

    }
    allImages.forEach((i, index) => {
        numero = getRandomInt()
        i.src = value[numero].flags.svg
        allNomes[index].innerHTML = `Nome: ${value[numero].name.common}`
        allCapitais[index].innerHTML = `Capital: ${value[numero].capital}`
        allPopulation[index].innerHTML = `População: ${value[numero].population}`
        allRegiao[index].innerHTML = `Região: ${value[numero].region}`

    })
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

//buscando os paises através do input:text

const pais = document.querySelector('#pais')
const img_pais = document.querySelector(".img-pais")
const back = document.querySelector('.back')
const borders_countries = document.querySelector('.border-countries')

//inserindo o conteudo do pais pesquisa no documento 

pais.addEventListener('keypress', (e) => {
        if (e.key == "Enter") {
            searchcountry = async(value) => {
                try {

                    // localizando o pais pesquisado
                    const searchfetch = await fetch(`https://restcountries.com/v2/name/${value}`)
                    const searchcountrydata = await searchfetch.json()

                    // inserindo no conteudo
                    img_pais.src = searchcountrydata[0].flags.svg
                    data = searchcountrydata[0]

                    // localizando os paises vizinhos
                    const borders = data.borders

                    // função que cria e preenche as informações

                    const preenchendo = (countries = borders) => {

                        countries.forEach((value) => {
                            this.button_borders = document.createElement('button')
                            borders_countries.insertAdjacentElement('beforeend', button_borders)
                            button_borders.classList.add('btn')
                            button_borders.innerText = value
                        })
                    }

                    // condição que caso a quantidade de paises for maior que 3, limite a 3 paises

                    if (borders.length > 3) {
                        let paises = []
                        for (let c = 0; c < 3; c++) {
                            paises.push(borders[c])
                        }
                        preenchendo(paises)
                    } else {
                        preenchendo()
                    }


                    for (dados in data) {
                        if (document.querySelector(`#${dados}`)) {
                            document.querySelector(`#${dados}`).innerHTML = `${data[dados]}`

                            // checando se o valor retornado é um objeto
                            checkObject = (value) => {
                                info = value[0]
                                if (typeof value === 'object') {
                                    for (keys in info) {
                                        if (document.querySelector(`.${keys}`)) {
                                            document.querySelector(`.${keys}`).innerHTML = `${info[keys]}`
                                        }
                                    }
                                }
                            }
                            checkObject(data[dados])

                        }
                    }

                } catch {
                    console.log('país não encontrado')
                }
            }
            searchcountry(pais.value)
            searched_content.style.display = 'block'
            main_content.style.display = 'none'

        }
    })
    // retirando o conteudo pesquisado do documento
back.addEventListener('click', () => {
    searched_content.style.display = 'none'
    main_content.style.display = 'block'
    document.querySelectorAll('button').forEach((i) => {
        i.remove()
    })

})