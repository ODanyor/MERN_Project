import React, {useEffect} from 'react'
import styled from 'styled-components'

// @REDUX
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// REDUX actions
import { removeFromCart } from '../../redux/actions/postActions'

function Cart (props) {
    const Container = styled.div`
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        h1 {
            letter-spacing: 7px;
            font-weight: 400;
        }
    `;
    const SubContainer = styled.div`
        border: 2px solid #292930;
        border-radius: 5px;
        width: 800px;
        display: grid;
        grid-gap: .5rem;
        grid-template-columns: repeat(auto-fill, 150px);
        @media screen and (max-width: 840px) {
            & {
                width: 95vw;
            }
        }
        @media screen and (max-width: 350px) {
            & {
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                width: 95vw;
            }
        }
    `;
    const Box = styled.div`
        position: relative;
        left: 50%;
        margin: .5rem;
        transform: translateX(-50%);
        width: 100px;
        height: 100px;
        background-color: #cae7df;
        h4 {
            letter-spacing: 4px;
            font-size: 13px;
            font-weight: 900;
        }
    `;
    const DeleteButton = styled.div`
        cursor: pointer;
        position: absolute;
        width: 2rem;
        height: 2rem;
        bottom: 0;
        * {
            display: block;
            position: absolute;
            top: 50%;
            left: 10%;
            border-radius: 5px;
        }
        .stick_1 {
            width: 1.7rem;
            height: 3px;
            transform: rotate(45deg);
            background-color: #292930;
        }
        .stick_2 {
            width: 1.7rem;
            height: 3px;
            transform: rotate(-45deg);
            background-color: #292930;
        }
    `;
    const { cartPosts } = props.post
    return (
        <Container>
            <h1>Shopping cart</h1>
            <SubContainer>
                {cartPosts.map(post => (
                    <Box key={post._id}>
                        <h4>{post.title}</h4>
                        <DeleteButton onClick={() => {
                            props.removeFromCart(post._id)
                        }}>
                            <div className="stick_1"></div>
                            <div className='stick_2'></div>
                        </DeleteButton>
                    </Box>
                ))}
            </SubContainer>
        </Container>
    )
}

Cart.propTypes = {
    cartPosts: PropTypes.object,
    removeFromCart: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}

const mapStateToProps = state => {
    return {
        post: state.post
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)