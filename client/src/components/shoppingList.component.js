import React from 'react'
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
        return(
            <div>
                <h1>Shopping List</h1>
                <h3>Amount of cakes in the shop: {this.props.numOfCakes}</h3>
                <button onClick={this.props.buyCake}>Buy a cake</button>
                <button onClick={this.props.addCake}>Add a cake</button>
                <hr/>
                <h3>Amount of coffe boxes in the shop: {this.props.numOfCoffe_boxes}</h3>
                <button onClick={this.props.buyCoffe}>Buy a coffe</button>
                <button onClick={this.props.addCoffe}>Add a coffe</button>
            </div>
        )
    }
}
// function ShoppingList(props) {
//     return (
//         <div>
//             <h1>Number of cakes: {props.numOfCakes}</h1>
//             <button onClick={props.buyCake}>Buy cake</button>
//         </div>
//     )
// }

// ShoppingList.propTypes = ({
//     numOfCakes: PropTypes.object.isRequired,
//     buyCake: PropTypes.func.isRequired
// })

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes,
        numOfCoffe_boxes: state.coffe.numOfCoffe_boxes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
        addCake: () => dispatch(addCake()),

        buyCoffe: () => dispatch(buyCoffe()),
        addCoffe: () => dispatch(addCoffe())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)