import React, { useState } from 'react'
import './shoppingList.css'
//import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'


const  ShoppingList = (props) => {
  const [state, setState] = useState({
    items: [
      {id: uuid(), name: 'Milk'},
      {id: uuid(), name: 'Cokies'},
      {id: uuid(), name: 'Pizza'},
      {id: uuid(), name: 'CocaCola'},
      {id: uuid(), name: 'Meat'},
      {id: uuid(), name: 'Box of water'}
    ]
  })
  const onDelete = (id) => {
    setState(state => ({items: state.items.filter(item => item.id !== id)}))
  }
  const [item, setItem] = useState('')
  const onChange = (e) => {
    setItem(e.target.value)
  }
  let context = (
    <div>
      <input type='text' name='name' placeholder='Name an item' value={item} onChange={onChange} />
      <button onClick={() => {
        if (item) {
          setState(state => ({
            items: [...state.items, {id: uuid(), name: item}]
          }))
          setItem('')
        }
      }}>Add</button>
      <ul>
        {state.items.map(item => {
          return (
            <li key={item.id}>
                <button onClick={() => onDelete(item.id)}>&times;</button>
                {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
  return context
}

export default ShoppingList