import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
import './shoppingList.css'

//Redux
import { connect } from 'react-redux'
import { buyCake, addCake } from '../redux/cake/cakeActions'
import { buyCoffe, addCoffe } from '../redux/coffe_box/coffe_boxActions'
import { PropTypes } from 'prop-types'

//Modal window
import ModalCom from './modal.component'


class ShoppingList extends React.Component {
    render() {
        const [number, setNumber] = useState(1)
        return (
            <div>
            <h2>Number of cakes - {this.props.numOfCakes} </h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => this.props.buyCake(number)}>Buy X Cakes</button>
            </div>
        )
    }
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


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)