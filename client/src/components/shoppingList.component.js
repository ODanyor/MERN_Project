import React, {useState} from 'react'
//import { CSSTransition, TransitionGroup } from 'react-transition-group'
//import uuid from 'uuid'
import './shoppingList.css'

//Redux
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
import { PropTypes } from 'prop-types'

//Modal window

function ShoppingList (props) {
    const [number, setNumber] = useState(1)
    return (
      <div>
        <h2>Number of cakes: {props.numOfCakes} </h2>
        <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
        <button onClick={() => props.buyCake(number)}>Buy X Cakes</button>
      </div>
    )
}

const mapStateToProps = state => {
    return {
      numOfCakes: state.cake.numOfCakes
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      buyCake: number => dispatch(buyCake(number))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShoppingList)