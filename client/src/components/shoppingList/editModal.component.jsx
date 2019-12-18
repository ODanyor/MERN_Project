import React, {useState} from 'react'
import styled from 'styled-components'
import './shoppingList.css'

// Redux
import { connect } from 'react-redux'
import { editItem } from '../../redux/items/itemActions'
import PropTypes from 'prop-types'

const EditModal = (props) => {
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
            <button className='editButtonSave' onClick={() => {
                if (item) {
                    props.editItem(props.id, item)
                }
            }}>Save changes</button>
        </div>
    )
}

EditModal.propTypes = {
    item: PropTypes.object.isRequired,
    editForm: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
    editItem: (id, name) => {dispatch(editItem(id, name))}
})

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)