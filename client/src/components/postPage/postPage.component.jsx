import React, {useEffect} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// @REDUX actions
import { getPosts, addToCart } from '../../redux/actions/postActions'

function PostPage (props) {
    useEffect(() => {
        props.getPosts()
    }, [])
    const { posts } = props.post
    const Button = styled.button`
        cursor: pointer;
        position: relative;
        top: -.45rem;
        right: 1.5rem;
        float: right;
        width: 1.7rem;
        height: 1.7rem;
        background-color: #3eb650;
        color: #ffffff;
        border: 0;
        border-radius: 5px;
        font-size: 23px;
        &:hover {
            background-color: #fcd02c;
            color: #292930;
        }
    `;
    const Container = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        h1 {
            letter-spacing: 7px;
            font-weight: 400;
        }
    `;
    const SubContainer = styled.div`
        margin: 1px;
        border: 2px solid #292930;
        border-radius: 5px;
        width: 800px;
        &:hover {
            background-color: #cae7df;
        }
        @media screen and (max-width: 840px) {
            & {
                width: 80%;
            }
        }
        span {
            font-size: 11px;
            letter-spacing: -.5px;
            font-weight: 700;
        }
    `;
    const Description = styled.div`
        width: 700px;
        margin: 1rem;
        @media screen and (max-width: 840px) {
            & {
                width: 80%;
            }
        }
    `;
    const Title = styled.div`
        font-size: 21px;
        font-weight: 900;
    `;
    return (
        <div>
            <Container>
            <h1>Post Page</h1>
            {posts.map(post => (
                <SubContainer key={post._id}>
                    <Title>{post.title}</Title>
                    <Description>{post.description}</Description>
                    <span>Published: {post.date}</span>
                    <Button onClick={() => {
                        props.addToCart(post)
                    }}>&#43;</Button>
                    <hr/>
                </SubContainer>
            ))}
            </Container>
        </div>
    )
}

PostPage.propTypes = {
    post: PropTypes.object.isRequired,

    getPosts: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    addToCart: (post) => dispatch(addToCart(post))
})

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)