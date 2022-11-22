var norte = document.querySelector("#norte")
var oeste = document.querySelector("#oeste")
var norte = document.querySelector("#norte")
var oeste = document.querySelector("#oeste")
var centro = document.querySelector("#centro")
var leste = document.querySelector("#leste")
var sul = document.querySelector("#sul")

norte.onclick = mensagemNorte
oeste.onclick = mensagemOeste
centro.onclick = mensagemCentro
leste.onclick = mensagemLeste
sul.onclick = mensagemSul

function mensagemNorte()
{
    alterarResposta('Norte', "4ª DDM Norte: Avenida Itaberaba, 731 - 1º andar", "","")
}

function mensagemOeste()
{
    alterarResposta('Oeste', "3° DDM Oeste: Avenida Corifeu de Azevedo Marques, 4.300, 2° andar no DP - Jaguaré", "9ª DDM Oeste: Avenida Menotti Laudísio, 286, 2° andar (ao lado do 87° DP) - Pirituba","")
}

function mensagemCentro()
{
    alterarResposta('Centro', "1ª DDM Centro: Rua Bittencourt Rodrigues, 200 - Sé", "","")
}

function mensagemLeste()
{
    alterarResposta('Leste', "5ª DDM Leste: Rua Doutor Corinto Baldoino Costa, 400, 2° andar - Tatuapé", "7ª DDM Leste: Rua Sabado D'Angelo, 46 - Itaquera","8ª DDM São Paulo: Avenida Osvaldo Valle Cordeiro, 190 - Jardin Marília")
}

function mensagemSul()
{
    alterarResposta('Sul', "2° DDM Sul: Avenida 11 de junho, 89, térreo - Saúde", "","")
}

function alterarResposta(textoTitulo, texto1, texto2, texto3)
{
    var titulo = document.querySelector(".titulo")

// Leste
    var resposta1 = document.querySelector(".resposta1")
    var resposta2 = document.querySelector(".resposta2")
    var resposta3 = document.querySelector(".resposta3")
   
    titulo.textContent = textoTitulo
    resposta1.textContent = texto1
    resposta2.textContent = texto2
    resposta3.textContent = texto3
}