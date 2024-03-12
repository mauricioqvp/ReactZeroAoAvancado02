import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem vindo à página Home</h1>
      <span>Sujeito programador</span> <br/> <br/>

      <Link to="sobre">Sobre</Link> <br/>
      <Link to="contato">Contato</Link> <br/>
      <Link to="/">Home</Link> <br/>
    </div>
  );
}

export default Home;