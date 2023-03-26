import React from 'react';
import Footer from './../components/Footer/index';
import { useParams } from 'react-router-dom';

export default function Sobre() {
    const { name } = useParams();
    
    return (
        <div>
        <div class="card mb-10" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src={'/assets/images/logotipo.png'} class="img-thumbnail float-start"/>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">Ola {name}</h5>
              <h1 class="card-text">Somos uma Empresa que fornece filmes de altissima qualidade e bastante entretenimento, focando em sempre agradar nossos clientes. </h1>
             
            </div>
          </div>
        </div>
      </div>
  <Footer />
    </div>
)
}


