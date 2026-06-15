import { useState } from "react";
import ItemLista from "./ItemLista"

function App() {

  const [listaMercado, setListaMercado] = useState([])

  const adicionarElementoNaLista = () => {
    const novaLista = [...listaMercado]
    const valorInput = input.value;

    novaLista.push(valorInput);

    input.value = "";


    console.log(novaLista);

    setListaMercado(novaLista);
  }

  return (
    <>
      <h1>Lista de Mercado</h1>
      <input type="text" placeholder='Digite um item' />
      <button onClick={() => adicionarElementoNaLista()} >Adicionar</button>


      {listaMercado.length > 0 ? (
        <ul>
          {listaMercado.map((itemLista, index) => (
            <ItemLista 
              key={index} 
              itemLista={itemLista} 
              listaMercado={listaMercado} 
              setListaMercado={setListaMercado} 
            />
          ))}
        </ul> 
      ) : (
          <p>Voce nao tem nenhum item na sua lista</p>
        )}
    </>
  )
}

export default App
