import React, { useState, useEffect } from 'react'
import './shoppingList.css'
import styled from 'styled-components'
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
  const Ul = styled.ul`
  li {
    background-color: #f4abaa;
    line-height: 2.1rem;
    button {
      cursor: pointer;
      margin-left: 1.4rem;
      margin-right: .4rem;
      width: 1.7rem;
      height: 1.7rem;
      background-color: #e12b38;
      border: 0;
      border-radius: 5px;
      &:hover {
        box-shadow: 0 0 5px black;
      }
    }
  }
  `;
  const Line = styled.div`
  width: 100vw;
  height: 1.7px;
  background-color: #292930;
  `;
  return (
    <div>
      <div>
        <h2>Shooping List page</h2>
        <div className="formIncluder">
          <input className="addInput" type='text' placeholder='Add an item' value={item} onChange={onChange} />
          <button className="addButton" onClick={() => {
            if (item) {
                props.addItem({id: uuid(), name: item})
                setItem('')
            }
          }}>Add</button>
        </div>
        <Ul>
          {items.map(item => {
            return (
              <li key={item.id}>
                <button onClick={() => props.deleteItem(item.id)}>&times;</button>
                {item.name}
                <Line />
              </li>
            )
          })}
        </Ul>
      </div>
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