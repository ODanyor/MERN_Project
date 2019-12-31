import React from 'react'
import styled from 'styled-components'


function DetailsModal (props) {
    const DetailModalBox = styled.div`
        position: fixed;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 200;
    `;
    const DetailBox = styled.div`
        width: 400px;
        background-color: black;
        border-radius: 5px;
        @media screen and (max-width: 840px) {
            & {
                width: 90vw;
            }
        }
    `;
    const DetailContent = styled.div`
        margin: 5px;
        color: #fff;
        p {
            font-size: 11px;
            margin: 1rem;
        }
        span {
            font-size: 9px;
        }
    `;
    return (
        <DetailModalBox>
            <DetailBox>
                <DetailContent>
                    <h3>Title: {props.post.title}</h3>
                    <p>Content: {props.post.description}</p>
                    <span>Published: {props.post.date}</span>
                </DetailContent>
            </DetailBox>
        </DetailModalBox>
    )
}

export default DetailsModal