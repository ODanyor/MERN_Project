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
   const onDelete = () => {
    this.setState()
  }
  let context = (
    <div>
      <ul>
        {state.items.map(item => {
          return (
            <li>
              <div key={item.id}>
                <button>&times;</button>
                {item.name}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
  return context
}

export default ShoppingList