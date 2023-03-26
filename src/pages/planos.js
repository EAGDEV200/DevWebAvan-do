import React from 'react';
import Footer from '../components/Footer';
 
const plans = [{
    "nome": "Basico",
    "duracao": "1 Mes",
    "descricao": "Plano inicial",

  },
  {
    "nome": "Avançado",
    "duracao": "6 Meses",
    "descricao": "Plano para membros Experientes",

  },
  {
    "nome": "CineMaster",
    "duracao": "1 Ano",
    "descricao": "CineMaster Premium  ",
  }
  ]
  
  export default function planos() {
    return (
      <div className="container text-center">
        <div class="row">
          {plans.map((filme, i) => (
            <div className="col" key={i}>
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title">{filme.nome}  </h5>
                  <p className="card-text">{filme.descricao}</p>
                  <p>{filme.duracao}</p>
                  
                  <a
                   
                  >
                    <div className="btn btn-warning">
                      Comprar
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}  <Footer/>
        </div>
      </div>
    
    )
  }