import React from 'react';
import Footer from './../components/Footer/index';
import { useParams } from 'react-router-dom';

const filmes = [{
    "nome": "Nome: Gigantes de aço",
    "genero": "Genero: Ação/Ficção cientifica",
    "foto": "gigantes.png",
    "descricao": "Descrição: boxe de robos",
    "nota": "Nota: 9",
    "duracao":"Duração: 2h 07m",
    "sinopse":"Sinopse: Em um futuro próximo, as máquinas substituem os homens no ringue,As lutas de boxe acontecem entre robôs de alta tecnologia. Charlie, um ex-lutador frustrado, se une ao filho para construir um competidor imbatível"
},
{
    "nome": "Nome: Tarzan",
    "genero": "Genero: Aventura/Musical",
    "foto": "tarzan.png",
    "descricao": "Descrição: Filme do homen gorila",
    "nota": "Nota: 10",
    "duracao":"Duração: 1h 28m",
    "sinopse":"Sinopese: Um bebê perde os pais na selva. Órfão e sozinho, ele é encontrado por uma macaca que o cria como se fosse seu próprio filho. Tarzan cresce pensando ser um gorila, agindo e vivendo como tal. Quando uma equipe de pesquisadores chega à floresta, o rapaz percebe que é igual a eles. Tarzan encontra a bela Jane correndo perigo e a salva, apaixonando-se por ela. Ele se vê dividido entre o desejo de estar com gente da sua espécie e a lealdade com a família de gorilas que o criou."
},
{
    "nome": "Nome: Chucky",
    "genero": "Genero: Terror/Slasher",
    "foto": "chucky.png",
    "descricao": "Descrição: Boneco assassino",
    "nota": "Nota: 6",
    "duracao":"Duração: 1h 27m",
    "sinopse":"Sinopse: Nica Pierce está cumprindo pena em um hospital psiquiátrico após ser acusada pelos crimes que o boneco Chucky cometeu. Agora, o brinquedo assassino dá um jeito de ir terminar o que começou, colocando a vida da moça em perigo novamente. O único que pode ajudá-la é Andy Barclay, o primeiro a enfrentar o boneco, agora adulto, e que terá sérias dificuldades quando Tiffany, a noiva de Chucky, retorna para ajudar o amado."
}
]


function Detalhes() {

  
         
    const { filme } = useParams();

    return (
        
        <div>
            <p>Filme: {filme}</p>
            {(() => {
                if (filme == 'Gigantes de aço') {
                    return (
                          <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src={'/assets/images/' + filmes[0].foto} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Informações do Filme:</h5>
              <p class="card-text">{filmes[0].nome}</p>
              <p class="card-text">{filmes[0].duracao}</p>
              <p class="card-text">{filmes[0].genero}</p>
              <p class="card-text">{filmes[0].sinopse}</p>
              <p class="card-text">{filmes[0].nota}</p>
              
            </div>
          </div>
        </div>
      </div>
                    )
                } else if (filme == 'Tarzan') {
                    return (
                        <div class="card mb-3" >
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src={'/assets/images/' + filmes[1].foto} class="img-fluid rounded-start" alt="..."/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">Informações do Filme:</h5>
                              <p class="card-text">{filmes[1].nome}</p>
                              <p class="card-text">{filmes[1].duracao}</p>
                              <p class="card-text">{filmes[1].genero}</p>
                              <p class="card-text">{filmes[1].sinopse}</p>
                              <p class="card-text">{filmes[1].nota}</p>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                } else {
                    return (
                        <div class="card mb-3" >
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src={'/assets/images/' + filmes[2].foto} class="img-fluid rounded-start" alt="..."/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">Informações do Filme:</h5>
                              <p class="card-text">{filmes[2].nome}</p>
                              <p class="card-text">{filmes[2].duracao}</p>
                              <p class="card-text">{filmes[2].genero}</p>
                              <p class="card-text">{filmes[2].sinopse}</p>
                              <p class="card-text">{filmes[2].nota}</p>

                            </div>
                          </div>
                        </div>
                      </div>
                    )
                }
            })()}
            <Footer />
        </div>
    )
}

export default Detalhes;