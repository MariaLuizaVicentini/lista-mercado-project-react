import ItemLista from "./ItemLista"

function App() {
let listaMercado = [
  "Banana", 
  "Maça", 
  "Carne",
]

  const adicionarElementoNaLista = () => {
    const novaLista = [...listaMercado]
    novaLista.push('Novo item');

    listaMercado = novaLista;
    console.log(novaLista);
  }

  return (
    <>
      <h1>Lista de Mercado</h1>
      <input type="text" placeholder='Digite um item' />
      <button onClick={() => adicionarElementoNaLista()} >Adicionar</button>

      <ul>
        {listaMercado.map((itemLista, index) => (
          <ItemLista key={index} itemLista={itemLista}/>
        ))}
      </ul>

      
    </>
  )
}

export default App
