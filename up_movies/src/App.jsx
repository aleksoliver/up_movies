import { useState } from "react";

function App() {

  const [titulo, setTitulo] = useState()
  const adicionar = event => {

    event.preventDefault()

    console.log('add',titulo);

    const atualizaInput = event => {

      console.log('atualizando', event.target.value);
      setTitulo(event.target.titulo)
    }


  }

  return (
    <>
      <div className="container">
        <h2 className="mt-3 mb-3">Cadastro Filmes</h2>
        <form className="row g-3">
          <div className="col-md-12">
            <label htmlFor="" className="form-label">
              Titulo
            </label>
            <input id="titulo" type="text" className="form-control" value={titulo} onChange={atualizaInput} />
          </div>
          <div className="col-md-12">
            <label htmlFor="" className="form-label">
              Sinopse
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-12">
            <label htmlFor="" className="form-label">
              Votos
            </label>
            <input type="text" className="form-control" />
          </div>
          <button className="btn btn-primary" onClick={adicionar}>Adicionar</button>
        </form>
      </div>
    </>
  );
}

export default App;
