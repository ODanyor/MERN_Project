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
    return (
        <div>
            <h1>Post Page</h1>
            {posts.map(post => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <span>{post.date}</span>
                    <Button onClick={() => {
                        props.addToCart(post)
                    }}>&#43;</Button>
                    <hr/>
                </div>
            ))}
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