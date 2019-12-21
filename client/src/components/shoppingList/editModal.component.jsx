import React, {useState} from 'react'
import styled from 'styled-components'
import './shoppingList.css'

// Redux
import { connect } from 'react-redux'
import { editItem } from '../../redux/actions/itemActions'
import PropTypes from 'prop-types'

const EditModal = (props) => {
    const Ul = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    `;
    const [item, setItem] = useState({
        name: ''
    })
    const onChange = (e) => {
        setItem({name: e.target.value})
    }
    return (
        <div className='editForm'>
            <Ul>
                <div>name: {props.name}</div>
            </Ul>
            <input type='text' placeholder="New item's name" className='editInput' value={item.name} onChange={onChange} />
            <button type='submit' className='editButtonSave' onClick={() => {
                if (item) {
                    props.editItem(props.id, item)
                    props.hide()
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
    editItem: (id, item) => {dispatch(editItem(id, item))}
})

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)