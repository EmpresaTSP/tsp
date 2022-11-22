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
    alterarResposta('Norte', 
     "9ª DP Rua dos Camarés, 94 – Carandiru",
     "13ª DP Av. Casa Verde, 677 - Casa Verde",
     "19ª DP Rua Amambai, 1181 - Vila Maria",
     "20ª DP Rua São Zeferino, 34 - Jardim França",
     "28ª DP Av. Itaberaba, 731 - Freguesia do Ó")
}

function mensagemOeste()
{
    alterarResposta('Oeste', 
    "7ª DP Rua Camilo, 317 - Vila Romana", 
    "14ª DP Rua Deputado Lacerda Franco, 372 – Pinheiros",
    "15ª DP Rua Renato Paes de Barros, 340 -Itaim Bibi", 
    "23ª DP Rua Itapecuru, 80 – Perdizes",
    "51ª DP Rua Barroso Neto, 46 – Butantã")
}

function mensagemCentro()
{
    alterarResposta('Centro', 
     "1ª DP Rua da Glória, 410 - Liberdade",
     "2ª DP Rua Jaraguá, 383 - Bom Retiro",
     "3ª DP Rua Aurora, 322 - Santa Efigênia", 
     "4ª DP Rua Marquês de Paranaguá, 246 – Consolação", 
     "5ª DP Rua Prof. Antonio Prudente, 160 – Liberdade")
}

function mensagemLeste()
{
    alterarResposta('Leste', 
    "10ª DP Av. Airton Pretinin, 69 – Penha", 
    "24ª DP Av. São Miguel, 3551 - Ponte Rasa",
    "30ª DP Rua Antonio de Camardo, 69 – Tatuapé", 
    "32ª DP Rua Sabbado D'Angelo, 64 – Itaquera", 
    "44ª DP Rua Salvador Gianetti, 386 – Guaianazes")
}

function mensagemSul()
{
    alterarResposta('Sul', 
    "11ª DP Rua Padre José de Anchieta, 138 - Santo Amaro", 
    "16ª DP Av. Onze de Junho, 89 - Vila Clementino",
    "17ª DP Rua Dom Luiz Lazagna, 534 – Ipiranga", 
    "34ª DP Av. Prof Francisco Morato, 2971 - Vila Sônia/Morumbi",
    "36ª DP Rua Tutóia, 921 - Vila Mariana")
}

function alterarResposta(textoTitulo, texto1, texto2, texto3, texto4, texto5)
{
    var titulo = document.querySelector(".titulo")

// Leste
    var resposta1 = document.querySelector(".resposta1")
    var resposta2 = document.querySelector(".resposta2")
    var resposta3 = document.querySelector(".resposta3")
    var resposta4 = document.querySelector(".resposta4")
    var resposta5 = document.querySelector(".resposta5")
   
    titulo.textContent = textoTitulo
    resposta1.textContent = texto1
    resposta2.textContent = texto2
    resposta3.textContent = texto3
    resposta4.textContent = texto4
    resposta5.textContent = texto5
    
}