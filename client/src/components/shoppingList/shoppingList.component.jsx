import React, { useState, useEffect } from 'react'

// Styles
import './shoppingList.css'
import styled from 'styled-components'

//import { CSSTransition, TransitionGroup } from 'react-transition-group'

// Components
import EditModal from './editModal.component'
import BackSide from '../navbar/burgerMenu/backMenu.component'

// Redux
import uuid from 'uuid'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getItems, addItem, deleteItem } from '../../redux/items/itemActions'


const ShoppingList = (props) => {
  
  useEffect(() => {
    props.getItems()
  }, [])


  const {items} = props.item
  const [item, setItem] = useState('')
  const onChange = (e) => {
    setItem(e.target.value)
  }

  const [isShow, setIsShow] = useState(false)
  const toggle = () => {
    setIsShow(!isShow)
  }
  const [change, setChange] = useState({
    id: '',
    name: ''
  })
  let backSide
  let editForm
  if (isShow) {
    backSide = <BackSide hide={() => toggle()} />
    editForm = <EditModal id={change.id} name={change.name}/>
    //function editForm (id) { return (<EditModal item={id}/>) }
  }

  // Styles
  const Ul = styled.ul`
  li {
    background-color: #f5624d;
    line-height: 2.1rem;
    color: #292930;
    letter-spacing: 1.3px;
    .deleteButton {
      cursor: pointer;
      margin-left: 1.4rem;
      margin-right: .4rem;
      width: 1.7rem;
      height: 1.7rem;
      background-color: #e12b38;
      border: 0;
      border-radius: 5px;
      color: #ffffff;
      &:hover {
        box-shadow: 0 0 10px #ffffff;
      }
    }
    .editButton {
      cursor: pointer;
      position: relative;
      background-color: #fcd02c;
      width: 2rem;
      border: 0;
      float: right;
      right: 1rem;
      top: .5rem;
      border-radius: 5px;
      color: #292930;
      border: 1px solid #292930;
    }
  }
  `;
  const DeleteButton = styled.button`
    position: relative;
    left: -2rem;
    cursor: pointer;
    font-size: 17px;
    color: #ffffff;
    width: 4rem;
    height: 2.1rem;
    border: 0;
    border-radius: 15px;
    background-color: #34a65f;
    &:hover {
      box-shadow: 0 0 5px black;
    }
  `;
  const Line = styled.div`
  width: 100vw;
  height: 1.7px;
  background-color: #292930;
  `;

  // JSX
  return (
    <div>
      {backSide}
      {editForm}
      <div>
        <h2>Shooping List page</h2>
        <div className="formIncluder">
          <input className="addInput" type='text' placeholder='Add an item' value={item} onChange={onChange} />
          <DeleteButton onClick={() => {
            if (item) {
                if ( props.item.items.length < 10) {
                props.addItem({id: uuid(), name: item})
                setItem('')
                }
            }
          }}>Add</DeleteButton>
        </div>
        <Ul>
          <h4>List of items:</h4>
          {items.map(item => {
            return (
              <li key={item.id}>
                <button className="deleteButton" onClick={() => props.deleteItem(item.id)}>&times;</button>
                {item.name}
                <button className="editButton" onClick={() => {
                  toggle()
                  setChange({
                    id: item.id,
                    name: item.name
                  })
                }}>Edit</button>
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