import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

//Redux actions
import { buyCake, addCake } from '../redux/cake/cakeActions'
import { buyCoffe, addCoffe } from '../redux/coffe_box/coffe_boxActions'

class ModalCom extends React.Component {
    render() {
        const Window = styled.div`
        `;
        const [number, setNumber] = useState(1)
        const onChange = (e) => {
            this.setState(e.target.value)
        }
        return (
            <div>
                <h1>Modal Window</h1>
                <Window>
                    <form>
                        <input type='text' placeholder='How many:' value={number} onChange={this.onChange} />
                        <button type='submit' onClick={() => this.props.buyCake(number)}>Submit</button>
                    </form>
                </Window>
            </div>
        )
    }
}

ModalCom.propTypes = ({
    numOfCakes: PropTypes.number,
    numberOfCoffe_boxes: PropTypes.number
})

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number)),
        addCake: (number) => dispatch(addCake(number)),

        buyCoffe: (number) => dispatch(buyCoffe(number)),
        addCoffe: (number) => dispatch(addCoffe(number))
    }
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.cake.numOfCakes,
        numberOfCoffe_boxes: state.coffe.numOfCoffe_boxes
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCom)