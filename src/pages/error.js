import React from 'react';
import Footer from './../components/Footer/index';
import { Link } from 'react-router-dom';

export default function Error(){

    return (
        <div>
            <img src={'/assets/images/not.png'} class="img-thumbnail"/>
            <h2>Desculpe Usuario Pagina não Encontrada...</h2>
            <div className="btn btn-warning">
                    Retornar <Link to='/'>Ininicio</Link>
                  </div>
            
  <Footer />
    </div>
)
}


