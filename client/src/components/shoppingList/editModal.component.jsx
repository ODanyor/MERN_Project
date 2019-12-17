import React from 'react'
import styled from 'styled-components'
import './shoppingList.css'

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
    return (
        <div className='editForm'>
            <input type='text' placeholder="New item's name" className='editInput' />
            <Button>Save changes</Button>
        </div>
    )
}

export default EditModal