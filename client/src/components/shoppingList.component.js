import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
import './shoppingList.css'

//Redux
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
import { PropTypes } from 'prop-types'

//Modal window
import ModalCom from './modal.component'


// class ShoppingList extends React.Component {
//     render() {
//         return(
//             <div>
//                 <h1>Shopping List</h1>
//                 <p>Amount of cakes in shop: {this.props.numOfCakes}</p>
//             </div>
//         )
//     }
// }
function ShoppingList(props) {
    return (
        <div>
            <h1>Number of cakes: {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

// ShoppingList.propTypes = ({
//     numOfCakes: PropTypes.object.isRequired,
//     buyCake: PropTypes.func.isRequired
// })

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)