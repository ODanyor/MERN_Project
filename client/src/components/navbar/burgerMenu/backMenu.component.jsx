import React from 'react';
import styled from 'styled-components';

function BackMenu(props) {
    const BackSide = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 100;
    `;
    return(
        <div>
            <BackSide onClick={props.hide}/>
        </div>
    );
};

export default BackMenu;