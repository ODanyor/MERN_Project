import React, { useState, useEffect } from 'react'
import './shoppingList.css'
//import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getItems } from '../redux/items/itemActions'


const  ShoppingList = (props) => {
  useEffect(() => props.getItems)
  const { items } = props.item
  const [item, setItem] = useState('')
  const onChange = (e) => {
    setItem(e.target.value)
  }
  let context = (
    <div>
      <input type='text' name='name' placeholder='Name an item' value={item} onChange={onChange} />
      <button onClick={() => console.log("Add button clicked")}>Add</button>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
                <button onClick={() => console.log("Delete button clicked")}>&times;</button>
                {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
  return context
}
ShoppingList.propTypes = {
  item: PropTypes.state.isRequired,
  getItems: PropTypes.func.isRequired
}
const mapDispatchToProps = (dispatch) => ({
  getItems: dispatch(getItems())
})
const mapStateToProps = (state) => ({
  item: state.item
})
export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ShoppingList)