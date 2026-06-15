import React from 'react'

const ItemLista = ({itemLista}) => {
    return (
    <li>
        <p>{itemLista}</p>
        <button>Remover</button>
    </li>    
    )
}

export default ItemLista