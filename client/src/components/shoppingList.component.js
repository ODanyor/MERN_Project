import React, { useState, useEffect } from 'react'
import './shoppingList.css'
//import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getItems, addItem, deleteItem } from '../redux/items/itemActions'


const ShoppingList = (props) => {
  useEffect(() => {
    props.getItems()
  }, [])
  const {items} = props.item
  const [item, setItem] = useState('')
  const onChange = (e) => {
    setItem(e.target.value)
  }
  return (
    <div>
      <h2 align='center'>Shooping List page</h2>
      <hr/>
      <input type='text' placeholder='Add an item' value={item} onChange={onChange} />
      <button onClick={() => {
        if (item) {
            props.addItem({id: uuid(), name: item})
            setItem('')
        }
      }}>Add</button>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <button onClick={() => props.deleteItem(item.id)}>&times;</button>
              {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

ShoppingList.propTypes = {
  item: PropTypes.object.isRequired,
  // Actions
  getItems: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  getItems: () => {dispatch(getItems())},
  addItem: (item) => {dispatch(addItem(item))},
  deleteItem: (id) => {dispatch(deleteItem(id))}
})

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)