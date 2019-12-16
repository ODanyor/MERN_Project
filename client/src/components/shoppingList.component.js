import React, { useState, useEffect } from 'react'
import './shoppingList.css'
//import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getItems, deleteItem } from '../redux/items/itemActions'


const ShoppingList = (props) => {
  useEffect(() => {
    props.getItems()
  }, [])
  const {items} = props.item
  return (
    <div>
      <h2 align='center'>Shooping List page</h2>
      <hr/>
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
  deleteItem: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  getItems: () => {dispatch(getItems())},
  deleteItem: (id) => {dispatch(deleteItem(id))}
})

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)