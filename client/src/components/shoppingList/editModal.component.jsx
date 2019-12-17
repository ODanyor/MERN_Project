import React, {useState} from 'react'
import styled from 'styled-components'
import './shoppingList.css'

// Redux
import { connect } from 'react-redux'
import { editItem } from '../../redux/items/itemActions'
import PropTypes from 'prop-types'

const EditModal = (props) => {
    const Button = styled.button`
        cursor: pointer;
        background-color: #fcd02c;
        width: 9rem;
        height: 2rem;
        font-size: 17px;
        letter-spacing: 1.7px;
        border: 0;
        border-radius: 15px;
        &:hover {
            box-shadow: 0 0 5px #292930;
        }
    `;
    const Ul = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    `;
    const [item, setItem] = useState('')
    const onChange = (e) => {
        setItem(e.target.value)
    }
    return (
        <div className='editForm'>
            <Ul>
                <div>name: {props.name}</div>
            </Ul>
            <input type='text' placeholder="New item's name" className='editInput' value={item} onChange={onChange} />
            <Button onclick={() => console.log('Edited')}>Save changes</Button>
        </div>
    )
}

// EditModal.propTypes = {
//     item: PropTypes.object.isRequired,
//     editForm: PropTypes.func.isRequired
// }

// const mapDispatchToProps = (dispatch) => {
//     editItem: () => dispatch(editItem())
// }

// const mapStateToProps = (state) => {
//     item: state.item
// }

export default EditModal