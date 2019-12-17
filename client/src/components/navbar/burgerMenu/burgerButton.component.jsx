import React from 'react';
import styled from 'styled-components';

function BurgerButton(props) {
    const Button = styled.div`
    cursor: pointer;
    width: 25px;
    height: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 2rem;
    @media screen and (min-width: 840px) {
        & {
            display: none;
        }
    }
        .stick {
            width: 100%;
            height: 2.4px;
            background-color: #ffffff;
            border-radius: 5px;
        }
    `;
    return(
        <div>
        <Button onClick={props.click}>
            <div className='stick' />
            <div className='stick' />
            <div className='stick' />
            <div className='stick' />
        </Button>
        </div>
    );
};

export default BurgerButton;