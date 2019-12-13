import React, { useState } from 'react'
//import { CSSTransition, TransitionGroup } from 'react-transition-group'
//import uuid from 'uuid'
import './shoppingList.css'

//Redux
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
import { PropTypes } from 'prop-types'

//Modal window


class ShoppingList extends React.Component {
    render() {
        //const [number, setNumber] = useState(0)
        console.log(this)
        return (
            <div>
                <h1>Shopping List page</h1>
                <p>Number of cakes - {this.props.cake}</p>
                {/* <h2>Number of cakes - {this.props.numOfCakes} </h2>
                    <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
                <button onClick={() => this.props.buyCake(number)}>Buy X Cakes</button> */}
            </div>
        )
    }
}

ShoppingList.propTypes = ({
    cake: PropTypes.number.isRequired
})

const mapStateToProps = state => {
    return {
        cake: state.cake.numOfCakes
    }
}

export default connect(mapStateToProps)(ShoppingList)