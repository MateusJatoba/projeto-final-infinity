

let select = document.getElementById("select")


select.addEventListener("change", function() {
    let valor = select.value
    // location.reload()

    document.querySelectorAll(".cards").forEach(card => card.remove());
    if (valor == "valor1") {
        

        let div = document.createElement("div")
        div.classList.add("cards")
        
        
        div.innerHTML = `
            <div class="card1" id="cards_id">
                <p style="margin-bottom: 7px;">BITCOIN</p>
                <p>
                    <img src="bitcoin.jpg" alt="logo da bitcoin">
                </p>
                <p>
                    O Bitcoin é a primeira criptomoeda descentralizada, criada em 2009. Funciona sem necessidade de intermediários e tem um suprimento limitado de 21 milhões de unidades. Ganhou popularidade como meio de investimento e pagamento, apesar de sua associação inicial com atividades ilícitas.
                </p>
            </div>`
        

        document.body.appendChild(div);
    }

    else if(valor == "valor2"){
        // location.reload()
        let div = document.createElement("div")
        div.classList.add("cards")

        div.innerHTML = `
            <div class="card2" id="cards_id">
            <p style="margin-bottom: 7px;">ETHEREUM</p>
            <p>
                <img src="img_ethereum.jpg" alt="logo da ethereum" >
            </p>
            
            <p>
                
                O Ethereum é uma plataforma de blockchain lançada em 2015, criada por Vitalik Buterin. Destaca-se por suportar contratos inteligentes e aplicativos descentralizados, operando com sua própria criptomoeda chamada Ether. Amplamente utilizado para desenvolver aplicativos descentralizados em setores como finanças, jogos e identidade digital
            </p>
            </div>`

        document.body.appendChild(div)

    }

    else if(valor == "valor3"){
        // location.reload()
        let div = document.createElement("div")
        div.classList.add("cards")
        div.innerHTML = `
            <div class="card3" id="cards_id">
            <p style="margin-bottom: 7px;" >TETHER</p>
            <p>
                <img src="theter.jpg" alt="logo tether" >

            </p>

            <p>
                
                Tether (USDT) é uma criptomoeda "stablecoin" que busca manter um valor estável em relação ao dólar dos Estados Unidos, embora tenha enfrentado críticas por preocupações com transparência e manipulação de mercado. Ainda assim, é amplamente usada por traders devido à sua suposta estabilidade no mercado de criptomoedas.
            </p>
            </div>`

        document.body.appendChild(div)

    }

    else if(valor == "valor4"){
        // location.reload()
        let div = document.createElement("div")
        div.classList.add("cards")
        div.innerHTML = `
            <div class="card4" id="cards_id">
            <p style="margin-bottom: 7px;" >USD COIN</p>
            <p>
                <img src="usd.png" alt="logo usd">
            </p>

            <p>
            
                
                A USD Coin (USDC) é uma stablecoin vinculada ao dólar americano (USD) em uma proporção de 1:1. Amplamente utilizada em exchanges de criptomoedas e DeFi, oferece estabilidade de valor para transações eficientes no mercado de criptomoedas.
        </p>
        </div>`

        document.body.appendChild(div)
    }

    else if(valor == "Mostrar todos"){
        let div = document.createElement("div")

        div.classList.add("cards")

        div.innerHTML = `
        <div class="card1" id="cards_id">
            <p style="margin-bottom: 7px;">BITCOIN</p>
            <p>
                <img src="bitcoin.jpg" alt="logo da bitcoin" >
            </p>

            <p>
                O Bitcoin é a primeira criptomoeda descentralizada, criada em 2009. Funciona sem necessidade de intermediários e tem um suprimento limitado de 21 milhões de unidades. Ganhou popularidade como meio de investimento e pagamento, apesar de sua associação inicial com atividades ilícitas.
            </p>
        </div>

        <div class="card2" id="cards_id">
            <p style="margin-bottom: 7px;">ETHEREUM</p>
            <p>
                <img src="img_ethereum.jpg" alt="logo da ethereum" >
            </p>
            
            <p>
                
                O Ethereum é uma plataforma de blockchain lançada em 2015, criada por Vitalik Buterin. Destaca-se por suportar contratos inteligentes e aplicativos descentralizados, operando com sua própria criptomoeda chamada Ether. Amplamente utilizado para desenvolver aplicativos descentralizados em setores como finanças, jogos e identidade digital
            </p>
        </div>

        <div class="card3" id="cards_id">
            <p style="margin-bottom: 7px;" >TETHER</p>
            <p>
                <img src="theter.jpg" alt="logo tether" >

            </p>

            <p>
                
                Tether (USDT) é uma criptomoeda "stablecoin" que busca manter um valor estável em relação ao dólar dos Estados Unidos, embora tenha enfrentado críticas por preocupações com transparência e manipulação de mercado. Ainda assim, é amplamente usada por traders devido à sua suposta estabilidade no mercado de criptomoedas.
            </p>
        </div>
        
        <div class="card4" id="cards_id">
            <p style="margin-bottom: 7px;" >USD COIN</p>
            <p>
                <img src="usd.png" alt="logo usd">
            </p>

            <p>
            
                
                A USD Coin (USDC) é uma stablecoin vinculada ao dólar americano (USD) em uma proporção de 1:1. Amplamente utilizada em exchanges de criptomoedas e DeFi, oferece estabilidade de valor para transações eficientes no mercado de criptomoedas.
           </p>
        </div>
    `

    document.body.appendChild(div)
    }

})


function converter(){
    let input = document.getElementById("input_converter").value
    let select_conversao = document.getElementById("select_conversao")

    let p = document.createElement("p")


    if (select_conversao.value == "valor1") {
        p.innerHTML = `${input} BITCOIN equivalem a ${(input * 343799.89).toFixed(2)} reais`;
    }
    else if (select_conversao.value == "valor2") {
        p.innerHTML = `${input} ETHEREUM equivalem a ${(input * 19327.12).toFixed(2)} reais`;
    }
    else if (select_conversao.value == "valor3") {
        p.innerHTML = `${input} TETHER equivalem a ${(input * 4.99).toFixed(2)} reais`;
    }
    else if (select_conversao.value == "valor4") {
        p.innerHTML = `${input} USD COIN equivalem a ${(input * 4.98).toFixed(2)} reais`;
    }
    
    // Remove o conteúdo anterior do elemento p
    document.getElementById("res").innerHTML = "";
    
    // Adiciona o novo conteúdo ao elemento p
    document.getElementById("res").appendChild(p);
    
}







