import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Planos from './pages/planos';
import Sobre from './pages/sobre';
import Detalhes from './pages/detalhes';
import Error from './pages/error';

function App() {
  return (
    <Router>
      <div className='App'>
    
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CineMaster</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
        <Link class="nav-link" to='/planos'>Planos</Link>
        <Link class="nav-link" to='/sobre/Eduardo'>Sobre</Link>
      </div>
    </div>
  </div>
</nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='planos' element={<Planos />} />
          <Route path='sobre/:name' element={<Sobre />} />
          <Route path='detalhes/:filme' element={<Detalhes />} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
