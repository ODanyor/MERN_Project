import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../navbar.css';

function OverMenu(props) {
        const StyledLink = styled(Link)`
        text-decoration: none;
            li {
                list-style: none;
                margin-left: 1rem;
                line-height: 4rem;
                font-size: 1.7rem;
                color: #f5624d;
            }
        `;
        let overSideclass = 'overSide';
        if (props.show) {
            overSideclass = 'overSide show'
        }
        return(
            <div className={overSideclass}>
                <ul>
                    <StyledLink onClick={props.click} to="/signUp"><li>Sign up</li></StyledLink>
                    <StyledLink onClick={props.click} to="/signIn"><li>Sign in</li></StyledLink>
                    <StyledLink onClick={props.click} to="/list"><li>Shopping list</li></StyledLink>
                    <StyledLink onClick={props.click} to="/posts"><li>Posts</li></StyledLink>
                </ul>
            </div>
        );
};

export default OverMenu;